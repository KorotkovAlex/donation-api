import express from 'express';
import bodyParser from 'body-parser';

import * as contracts from './contracts';


export const app = express();

app.use(bodyParser.json());

app.get('/request', function (req, res) {
  console.log('user');
  res.json({ user: 'test' });
});

app.get('/request/:id', function (req, res) {
  console.log('user');
  res.json({ user: 'test' });
});

app.get('/user', function (req, res) {
  console.log('user');
  db.getUsers.then(data => {
    console.log(data);
    res.json({ users: data });
  });
});

app.post('/login', function (req, res) {
  console.log('login');
  contracts.unlockAccount(req.body.privateKey, req.body.password).then(data => {
    console.log(data);
    res.json(data);
  })
});

app.post('/signup', function (req, res) {
  let user = {};
  console.log(req.body.password);
  contracts.signUp(req.body.password).then(privateKey => {
    user = {
      password: req.body.password,
      privateKey
    }
    res.json(user);
  });
});
// getUsers getBalance
app.post('/getbalance', function (req, res) {
  console.log('getBalance');
  contracts.getBalance(req.body.privateKey).then(data => {
    console.log('getBalance', data);
    res.json(data);
  });
});

app.post('/getUsers', function (req, res) {
  console.log('getUsers');
  contracts.getUsers().then(data => {
    console.log('getUsers', data);
    res.json(data);
  });
});

app.post('/getusersbykey', function (req, res) {
  console.log('getusersbykey');
  contracts.getUsersByKey(req.body.privateKey).then(data => {
    console.log('getusersbykey', data);
    res.json(data);
  });
});

app.post('/addsender', function (req, res) {
  console.log('addSender', req.body.to, req.body.from, req.body.count, req.body.password);
  contracts.addSender(req.body.to, req.body.from, req.body.count, req.body.password).then(data => {
    console.log('addSender', data);
    res.json(data);
  });
});

app.post('/adduser', function (req, res) {
  console.log('adduser', req.body.password, req.body.from, req.body.title, req.body.description, req.body.count, req.body.countNow);
  contracts.addUser(req.body.password, req.body.from, req.body.title, req.body.description, req.body.count, req.body.countNow).then(data => {
    console.log('adduser', data);
    res.json(data);
  });
});

app.post('/adddocs', function (req, res) {
  contracts.addDocs(req.body.password, req.body.from, req.body.title, req.body.description).then(data => {
    console.log('adduser', data);
    res.json(data);
  });
});

app.post('/addnumber', function (req, res) {
  console.log('addnumber', req.body.privateKey, req.body.password);
  contracts.addNumber(req.body.privateKey, req.body.password).then(data => {
    res.json(data);
  });
});

app.post('/takemoney', function (req, res) {
  console.log('take money app', req.body.from, req.body.to);
  contracts.sendTransaction(req.body.password, req.body.from, req.body.to, req.body.value ).then(data => {
    console.log('sendTransaction', data);
    res.json(data);
  });
});

app.get('/user/:id', function (req, res) {
  console.log('user/:id');
  console.log(req.params.id);
  res.json({ user: 'test ' + req.params.id });
});

app.get('/', function (req, res) {
  console.log('/');
  res.json({ hello: 'world' });
});

app.post('/adduserscrad', function (req, res) {
  console.log('adduserscrad', req.body.privateKey, req.body.password);
  contracts.adduserscrad(req.body.privateKey, req.body.password, req.body.email, req.body.age).then(data => {
    res.json(data);
  });
});
