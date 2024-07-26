import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class SessionController {
    async store({ request, auth, response, session }: HttpContext) {
        const email = request.input('email')
        const password = request.input('password')
        // const { email, password } = request.only(['email', 'password'])

        const user = await User.verifyCredentials(email, password)
    try{
         await auth.use('web').login(user)
        response.redirect('/')
    }catch{
        session.flash({error: 'Identifiants incorrect'})
        response.redirect().toRoute('login')
    }
    }
}