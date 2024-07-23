import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
    public async login({request, auth, response}: HttpContext){
        const email = request.input('email')
        const password = request.input('password')

        try {
            await auth.use('web').attempt(email, password)
            return response.rediect('/')
        } catch {
            return response.badRequest('Ivalid credentials')
        }
    }

    public async logout({auth, response}: HttpContext){
        await auth.use('web').logout()
        return response.redirect('/login')
    }
}