import type { HttpContext } from '@adonisjs/core/http'
import Tweet from '#models/tweet'

export default class TweetsController {
      private  perPage = 20
      
      public async index ({ view }: HttpContext) {
        const page = await Tweet.query().paginate(1, this.perPage)
        return view.render('/home', { page })
      }

      public async paginate({ response, params, view }: HttpContext) {
        const page = await Tweet.query().paginate(params.page, this.perPage)
        const html = await view.render('/home', { posts: page })
        return response.json({ html, page })
      }
  }