const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:51515/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server.')
  }
  console.log('Connected to MongoDB server.');

  db.collection('Todos').insertOne({
    text: 'hello mongo',
    completed: false,
  }, (error, result) => {
    if (error) {
      return console.log(`unable to save todo: ${error}`);
    } else {
      console.log(result.ops[0]._id.getTimestamp());
    }
  });

  db.close();
});