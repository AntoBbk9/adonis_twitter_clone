import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import Following from '../models/following'


export default class UsersController {
    async store({request, response}: HttpContext){
        const { email, password } = request.only(['email', 'password'])

        const user = await User.verifyCredentials(email, password)
        return response.status(200).json({ message: 'Login successful', user })
    }

    async index({ view }: HttpContext) {
        const users = await User.all()
        return view.render('pages/users', { users })
    }

    // async follow({ params, auth, response }){
    //     const id_user = auth.user.id
    //     const id_follower = params.id

    //     if(id_user === id_follower){
    //         return response.redirect().back.with('error', 'Vous ne pouvez vous suivre vous-même')
    //     }

    //     const exists = await Following.query()
    //     .where('follower_id', id_user)
    //     .where('following_id', id_follower)
    //     .first()

    //     if(exists){
    //         return response.redirect().back().with('error', 'Vous suivez déjà cette personne')
    //     }

    //     await Following.create({ 'follower_id': id_user, 'following_id': id_follower })
    //     return response.redirect().back.with('success', 'Utilisateur suiviavec succès')
    // }

}



