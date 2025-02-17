/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import router from '@adonisjs/core/services/router'
import { HttpContext } from "@adonisjs/core/http"
import { middleware } from '#start/kernel'
const LoginController = ()=> import ('#controllers/session_controller')
const RegistersController = () => import ('#controllers/registers_controller')
const LogoutsController = () => import ('#controllers/logouts_controller')
const TweetsController = () => import ('#controllers/tweets_controller')
const UsersController = () => import ('#controllers/users_controller')



const tweets = [
  {
    id: 1,
    name: 'CNN',
    username: '@CNN',
    tweetAvatar: 'images/tweet-profile-photo.png',
    date: '7m',
    text: 'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
    comments: 57,
    retweets: 144,
    likes: 184,
    shares: 0,
    verified: true
  },
  {
    id: 2,
    name: 'The New York Times',
    username: '@nytimes',
    date: '2h',
    tweetAvatar: 'images/nytimes-avatar.png',
    text: 'Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land.',
    image: 'images/tweet-image.png',
    comments: 19,
    retweets: 48,
    likes: 484,
    shares: 0,
    verified: true
  },
  {
    id: 3,
    name: 'Tweeter',
    date: 'Oct 29',
    username: '@twitter',
    tweetAvatar: 'images/tweeter-avatar.png',
    text: 'BIG NEWS lol jk still Twitter' ,
    comments: "6.8K",
    retweets: "36.6K",
    likes: "267.1K",
    shares: 0,
    verified: true

  },
  {
    id: 4,
    name: 'Tweeter',
    date: 'Oct 04',
    username: '@twitter',
    tweetAvatar: 'images/tweeter-avatar.png',
    text: 'hello literally everyone' ,
    comments: "116.7K",
    retweets: "785.5K",
    likes: "3.3M",
    shares: 0,
    verified: true

  },
  {
    id: 5,
    name: 'Twitter',
    username: '@twitter',
    date: '04 Oct',
    tweetAvatar: 'images/tweeter-avatar.png',
    text: 'hello literally everyone',
    image: 'images/tweet-image.png',
    comments: 19,
    retweets: 48,
    likes: 484,
    shares: 0,
    verified: true

  },
];

    router.get('/', async (ctx: HttpContext) => {
      await ctx.auth.check()
      return ctx.response.redirect().toRoute('home')
    })
        
    router.get('/home', async ({ view }) => {

      return view.render('pages/home')
    }).as('home').use(middleware.auth())
  router.group(()=> {
    router.post('/tweets', [TweetsController, 'create']).as('tweet.create')
    router.get('/tweets', [TweetsController, 'index']).as('tweet.index')
  }).as('api')


    router.get('/users', [UsersController, 'index']).use(middleware.auth())
    router.get('/users:id', [UsersController, 'follow']).use(middleware.auth())

    
    router.group(() => {
      router.get('/register', [RegistersController, 'showregister']).as('register.show')
      router.post('/register', [RegistersController, 'store']).as('register.store')

      router.get('/login', async ({ view }) => {
        return view.render('pages/login')
      }).as('login')
      router.post('/login', [LoginController, 'store']).as('login.store')

      router.post('/logout', [LogoutsController, 'handle']).as('logout')

    }).as('auth')


