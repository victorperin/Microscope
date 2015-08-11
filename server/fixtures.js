if (Posts.find().count() === 0) {
  console.log("Populando banco de dados...");
  Posts.insert({
    title: 'Introducing Telescope',
    author: 'Sacha Greif',
    url: 'http://sachagreif.com/introducing-telescope/',
    flagged: false
  });

  Posts.insert({
    title: 'Meteor',
    author: 'Tom Coleman',
    url: 'http://meteor.com',
    flagged: false
  });

  Posts.insert({
    title: 'The Meteor Book',
    author: 'Tom Coleman',
    url: 'http://themeteorbook.com',
    flagged: false
  });
}else{
  console.log("Banco de dados já está populado, por favor, execute 'meteor reset' no terminal.")
}
