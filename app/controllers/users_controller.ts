import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import Follower from '#models/following'

export default class UsersController {
    async store({request, response}: HttpContext){
        const { email, password } = request.only(['email', 'password'])

        const user = await User.verifyCredentials(email, password)
        return response.status(200).json({ message: 'Login successful', user })
    }

    async index({ view, auth, response }: HttpContext) {
        try {
            const authUser = await auth.authenticate()

            // const followingIds = await Follower.query()
            // .where('follower', authUser.id)

            const users = await User.query()
            .where('id', '!=', authUser.id)
            // .andWhereNotIn('id', followingIds)

            // .pluck('user_id')

            return view.render('pages/users', { users })
        }catch(error){
            return response.status(500).send({ error: 'Une erreur est survenue lors de la récupération des utilisateurs.' })
        }
    }

    async follow({ request, response, session }) {
        let id_user = request.input('userId')
        let id_follower = request.input('follower')
        
        const follower = new Follower()
        follower.id_user = id_user
        follower.id_follower = id_follower
        follower.is_following = true
        await follower.save()
        response.send(true)

        session.flash('notification', {
            type: 'success',
            message: 'Vous venez de suivre cette personne avec succes'
        })       
        return response.redirect().toPath('/')
    }
}

