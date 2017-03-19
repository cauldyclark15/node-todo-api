const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:51515/TodoApp');

module.exports = {
  mongoose
};