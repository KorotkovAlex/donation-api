var pgp = require("pg-promise")();
// 1) Авторизация
// 2) Список запросов
// 3)
var db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'social',
    user: 'alexkorotkov',
    password: ''
});

function getUsers() {
  return db.query("SELECT * from users")
      .then(function (data) {
          return data;
      });
}

function getUserById() {
  return db.query("SELECT * from users")
      .then(function (data) {
          return data;
      });
}

function getUserByLoginAndKey(login, password) {
  console.log('login, password', login, password);
  return db.one('SELECT * from users where name = $1', [login])
      .then(function (data) {
          return data;
      });
}

function signUp(user) {
  console.log('user', user);

  // db.none('INSERT INTO documents(id, doc) VALUES(${id}, ${this})', {
  //   id: 123,
  //   body: 'some text'
  // })
  // db.query('insert ')
  // return db.one('SELECT * from users where name = $1', [login])
  //     .then(function (data) {
  //         return data;
  //     });
}

function getRequests() {
  return db.query("SELECT * from users")
      .then(function (data) {
          return data;
      });
}

function getRequestById() {
  return db.query("SELECT * from users")
      .then(function (data) {
          return data;
      });
}

module.exports = {
  getUsers: getUsers(),
  getUserById: getUserById,
  getRequests: getRequests,
  getRequestById: getRequestById,
  getUserByLoginAndKey: getUserByLoginAndKey,
  signUp: signUp
}
