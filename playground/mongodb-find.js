const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:51515/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server.')
  }
  console.log('Connected to MongoDB server.');

  db.collection('Todos').find({ completed: true }).toArray()
    .then(docs => {
      console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 2));
    }, err => {
      console.log(`failed: ${err}`);
    });

  // db.close();
});