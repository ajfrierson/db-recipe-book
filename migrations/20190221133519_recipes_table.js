
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {
      
    tbl.increments();

    tbl.string('name', 155).notNullable();
    tbl.string('instructions').notNullable();

    tbl
        .integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
