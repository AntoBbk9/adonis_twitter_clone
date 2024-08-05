import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tweets'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id',{
        primaryKey:true
      })
      table.string('name').notNullable()
      table.integer('username').nullable()
      table.string('tweetAvatar').nullable()
      table.string('text').notNullable()
      table.integer('user_id').nullable()
      table.foreign('user_id').references('users.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}