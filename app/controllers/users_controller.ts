import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import Follower from '#models/following'

export default class UsersController {
    async store({request, response}: HttpContext){
        const { email, password } = request.only(['email', 'password'])

        const user = await User.verifyCredentials(email, password)
        return response.status(200).json({ message: 'Login successful', user })
    }

  public async index({ view, auth }: HttpContext) {
    try {
      const authUser = await auth.authenticate()
      const users = await User.query().whereNot('id', authUser.id)

      const followingIds = await Follower.query()
        .where('id_follower', authUser.id)

      const usersWithFollowingStatus = users.map(user => ({
        ...user.toJSON(),
        is_following: followingIds.includes(user.id),
      }))

      return view.render('pages/users', { users: usersWithFollowingStatus })
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error)
      return view.render('pages/users', { users: [] })
    }
  }

  public async follow({ request, auth, response }: HttpContext) {
    const userIdToFollow = request.input('userId')
    const currentUser = auth.user

    if (!currentUser) {
      return response.status(401).send({ error: 'Utilisateur non authentifié' })
    }

    await Follower.create({
      id_user: userIdToFollow,
      id_follower: currentUser.id,
      is_following: true,
    })

    return response.status(200).send({ message: 'Suivi ajouté avec succès' })
  }

  public async unfollow({ request, auth, response }: HttpContext) {
    const userIdToUnfollow = request.input('userId')
    const currentUser = auth.user

    if (!currentUser) {
      return response.status(401).send({ error: 'Utilisateur non authentifié' })
    }

    const follow = await Follower.query()
      .where('user_id', userIdToUnfollow)
      .andWhere('follower_id', currentUser.id)
      .first()

    if (follow) {
      await follow.delete()
    }

    return response.status(200).send({ message: 'Désabonnement réussi' })
  }
}

