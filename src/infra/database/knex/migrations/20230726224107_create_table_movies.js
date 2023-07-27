/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('movies', function (table){
            table.string('id',40).primary();
            table.string('description', 255);
            table.string('year', 5);
            table.text('sinopse');
            table.text('image');
            table.timestamp('created_at').default(knex.fn.now())
            table.string('created_by', 40);
            table.dateTime('updated_at');
            table.string('updated_by', 40);
            table.string('status', 2);
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('movies');
};
