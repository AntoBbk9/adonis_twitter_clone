import type { HttpContext } from '@adonisjs/core/http'
import { tweetValidator } from '#validators/tweet'
import Tweet from '#models/tweet'
import db from '@adonisjs/lucid/services/db'

export default class PostsController {
    async store({ request, view, auth }: HttpContext) {
    
        const page = request.input('tweet', 1);
        const limit = 20
        const { name, username, tweetAvatar, text, verified }= await request.validateUsing(tweetValidator)
        console.log('validation successful, creating tweet');

        if (!auth.user) {
          return view.render('errors/unauthorized')
        }
        const tweets = await Tweet.create({
          name,
          username: auth.user.firstname
          tweetAvatar,
          text,
          verified,
        })
        const paginatedTweets = await db.from('tweets').paginate(page, limit)
        paginatedTweets.baseUrl('/home')

        return view.render('pages/home', { tweets: paginatedTweets })
       
      }
}