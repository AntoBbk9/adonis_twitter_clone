import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class PostsController {
    async store({ request, view }: HttpContext) {
        const page = request.input('tweet', 1);
        const limit = 20

        const tweets = await db.from('tweets').paginate(page, limit)
        tweets.baseUrl('/posts')

        return view.render('pages/home', { tweets })
       
      }
}