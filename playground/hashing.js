const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

const data = {
  id: 5
}

const token = jwt.sign(data, 'secret');

const decoded = jwt.verify(token, 'secret');

console.log(decoded);
// jwt.verify

// const message = 'bar foo 15';
// const hash = SHA256(message).toString();

// let data = {
//   id: 5
// };

// const token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'secret').toString(),
// }

// const resultHash = SHA256(JSON.stringify(token.data) + 'secret').toString();

// if (resultHash === token.hash) {
//   console.log('data not changed');
// } else {
//   console.log('changed');
// }