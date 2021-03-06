const faker = require('faker');

const createFakeTipper = i => ({
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  photo_url_id: i,
  email: faker.internet.email(),
  password: 'randomHash'
});

exports.seed = async function(knex, Promise) {
  await knex('tippers').truncate();

  const fakeTippers = [];
  const desiredFakeTippers = 50;

  for (let i = 0; i < desiredFakeTippers; i++) {
    fakeTippers.push(createFakeTipper(i));
  }

  await knex('tippers').insert(fakeTippers);
};
