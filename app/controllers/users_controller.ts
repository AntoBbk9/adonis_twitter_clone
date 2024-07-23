import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'


export default class SessionController {
    async store({request, response}: HttpContext){
        const { email, password } = request.only(['email', 'password'])

        const user = await User.verifyCredentials(email, password)
        return response.status(200).json({ message: 'Login successful', user })    }
}



