import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'followings'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id',{
        primaryKey:true
      })

      table.integer('id_user')
      table.integer('id_follower')
      table.boolean('isFollowing')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}