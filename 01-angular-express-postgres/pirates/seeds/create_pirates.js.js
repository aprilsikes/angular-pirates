
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('pirates').del(),

    knex('pirates').insert({
      name: 'Anne Bonney',
      poison: 'Rum',
      accessory: 'hot temper',
      image_url: 'http://2.bp.blogspot.com/-WSKMEi_MH5U/U-AdUnMNuvI/AAAAAAAABI8/fv0BXLICx8c/s1600/Anne_Bonny_color.jpg'
    }),
    knex('pirates').insert({
      name: 'Jack Sparrow',
      poison: 'Rum',
      accessory: 'hot body',
      image_url: 'http://static.comicvine.com/uploads/original/11/111746/4352187-pirates4jacksparrowpostercropped.jpg'
    }),
    knex('pirates').insert({
      name: 'One-Eyed Willy',
      poison: 'Jewels',
      accessory: 'big boat',
      image_url: 'http://vignette2.wikia.nocookie.net/goonies/images/a/ad/Eyepatch_goonies20.jpg/revision/latest?cb=20100802022046'
    })
  );
};
