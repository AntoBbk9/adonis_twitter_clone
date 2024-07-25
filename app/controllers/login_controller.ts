import type { HttpContext } from '@adonisjs/core/http'
import { loginvalidator } from '#validators/auth'
import User from '#models/user'


export default class LoginController {
      async store({ request, response, auth }: HttpContext) {
        const { email, password } = await request.validateUsing(loginvalidator)

        const user = await User.verifyCredentials(email, password)
        await auth.use('web').login(user)

        return response.redirect().toPath('/')
    }

}