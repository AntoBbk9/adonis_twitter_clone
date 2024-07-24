import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'commentaires'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id',{
        primaryKey:true
      })

      table.string('text')
      table.integer('user_id').notNullable()
      table.foreign('user_id').references('users.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('author_id').notNullable()
      table.foreign('author_id').references('tweets.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}