import { registervalidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class RegistersController {
    async showregister({ view }: HttpContext) {
        return view.render('pages/createcompte')
      }
      async store({ request, response, auth }: HttpContext) {
        const data = await request.validateUsing(registervalidator)
        const user = await User.create(data)

         await auth.use('web').login(user)
        return response.redirect().toPath('/')
    }
    
}