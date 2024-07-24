import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Tweet from '#models/tweet'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Tweet.create({
        id: 1,
        name: 'CNN',
        username: '@CNN',
        tweetAvatar: 'images/tweet-profile-photo.png',
        date: '7m',
        text: 'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
        verified: true
    
    })
  }
}