let env = process.env.NODE_ENV || 'development';
console.log('env *****', env)

if (env === 'development') {
  process.env.PORT = 5555;
  process.env.MONGODB_URI = 'mongodb://localhost:51515/TodoApp';
} else if (env === 'test') {
  process.env.PORT = 5555;
  process.env.MONGODB_URI = 'mongodb://localhost:51515/TodoAppTest';
}