import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Tweet extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare username: string

  @column()
  declare tweetAvatar: string

  @column()
  declare text: string

  @column()
  declare comments: number

  @column()
  declare retweets: number

  @column()
  declare likes: number

  @column()
  declare shares: number

  @column()
  declare verified: boolean

  @column()
  declare date: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}