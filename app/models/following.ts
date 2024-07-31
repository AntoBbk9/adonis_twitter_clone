import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Following extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare id_user: number

  @column()
  declare id_follower: number

  @column()
  declare isFollowing: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}