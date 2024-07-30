import type { HttpContext } from '@adonisjs/core/http'
import Tweet from '#models/tweet'

export default class TweetsController {
    async followingTweets({ auth, view }: HttpContext){
        if (!auth.user) {
              return view.render('errors/unauthorized')
        }
        const followingIds = await DBtwiter.from('followings')
        .where('follower_id', auth.user.id)
        .pluck('following_id')

    const tweets = await Tweet.query()
      .whereIn('user_id', followingIds)
      .orderBy('created_at', 'desc')

    return view.render('pages/home', { tweets })
  }
}