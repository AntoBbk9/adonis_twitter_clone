import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('firstname').nullable()
      table.string('secondname').nullable()
      table.string('telephone')
      table.string('email', 254).notNullable().unique()
      table.date('birthday')
      table.string('profilimage')
      table.string('sexe').notNullable()
      table.string('password').notNullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}