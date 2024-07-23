import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tweets'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id',{
        primaryKey:true
      })

      table.string('name').notNullable()
      table.string('username').notNullable()
      table.string('tweetAvatar').notNullable()
      table.string('text').notNullable()
      table.boolean('verified').notNullable()
      table.integer('author_id').notNullable()
      table.foreign('author_id').references('users.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}