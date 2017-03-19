const mongoose = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');

const id = '58c60e42dd060905b97ab905';

Todo.findById(id).then(todo => {
  if (!todo) {
    return console.log('id not found');
  }
  console.log(todo);
}).catch(e => console.log(e));