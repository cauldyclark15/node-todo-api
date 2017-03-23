const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = 'aaaaaaaa';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  })
})

const hashPassword = '$2a$10$qmNwERCIVSJWJWelpv528Ox3iQO0Hq5z3k0XS6saf5kX1IA67iYmS';

bcrypt.compare(password, hashPassword, (error, result) => {
  console.log(result);
})

// const data = {
//   id: 5
// }

// const token = jwt.sign(data, 'secret');

// const decoded = jwt.verify(token, 'secret');

// console.log(decoded);
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