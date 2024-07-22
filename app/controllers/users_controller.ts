import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class SessionController {
    async store({request, response}: HttpContext){
        const { email, password } = request.only(['email', 'password'])

        const user = await User.findBy('email', email)
        if(!user){
            response.abort('Invalid credentials')
        }
        await hash.verify(password, password)
    }
}