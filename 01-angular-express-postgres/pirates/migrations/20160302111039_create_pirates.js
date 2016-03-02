
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pirates', function (table) {
  table.increments();
  table.string('name');
  table.string('poison');
  table.string('accessory');
  table.text('image_url');
  table.timestamps();
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pirates')
};
