//geth --datadir ./ init CustomGeneris.json
//geth --identity "myTestNode" --datadir ./ --networkid 1999 --rpcport 8545 --rpcaddr 127.0.0.1 --port 30303 --rpc --rpcapi="db,eth,net,web3,personal" --nodiscover --rpccorsdomain "*" console
import express from 'express';
import db from './db';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json())

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

app.post('/user', function (req, res) {
  console.log('user/post');
  console.log(req.body);
  db.getUserByLoginAndKey(req.body.password, req.body.privateKey).then(data => {
    web3.eth.personal.unlockAccount(req.body.privateKey,req.body.password, 15000)
  });
});

app.post('/signup', function (req, res) {
  console.log(req.body);
  let user = {};
  web3.eth.personal.newAccount(req.body.password).then(address => {
    user = {
      password: req.body.password,
      address
    }
    res.json(users);
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
// web3.eth.personal.sign("Hello world", "0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6", "!@superpassword")
// .then(console.log);
// // web3.eth.personal.sign("Hello world", "0xbe7df000c7097e4d1e9c8e009f3441bb197f2bb6", "!@superpassword")
// // .then(console.log);
// // var MyContract = new web3.eth.Contract(abi)
// // let abi = JSON.parse({"constant":false,"inputs":[],"name":"test","outputs":[{"name":"","type":"int8"}],"type":"function"});
// var abi = [ { "constant": false, "inputs": [ { "name": "i", "type": "int8" } ], "name": "setNumber", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "getNumber", "outputs": [ { "name": "", "type": "int8" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" } ]
// var contractAddress = "0xa0D2C23aC6f8a82d65A5A3A351eb9280DACe4C79";
// var corecontractContract = new web3.eth.Contract(abi,contractAddress);
// // var contract = new web3.eth.Contract(contractAddress, ABI);
// // var contract = new web3.eth.Contract(ABI, contractAddress);
// var batch = new web3.BatchRequest();
// batch.add(web3.eth.getBalance.request('0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6', 'latest', function(error, result){
// console.log('error: ', error);
// console.log('set', result);
// }));
// batch.add(corecontractContract.methods.setNumber(10).send({from: '0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6'}, function(error, result){
// console.log('error: ', error);
// console.log('set', result);
// }));
// batch.execute();
//
// // web3.eth.personal.sign("Hello world", "0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6", "!@superpassword")
// web3.eth.personal.unlockAccount("0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6","!@superpassword");
// corecontractContract.methods.setNumber(10).send({from: '0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6'}, function(error, result){
// console.log('error: ', error);
// console.log('set', result);
// })
// .then(console.log);
//
// corecontractContract.methods.getNumber().call({from: '0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6'}, function(error, result){
// console.log('error: ', error);
// console.log('get', result);
// })
// .then(console.log);
// web3.eth.personal.newAccount('!@superpassword')
// var sender = web3.eth.accounts[0];
// var receiver = web3.eth.accounts[1];
// var amount = web3.toWei(0.01, "ether");
// eth.sendTransaction({from:sender, to:receiver, value: amount})
// web3.eth.getAccounts(console.log);
// var key="0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6"
// var privateKey = new Buffer(key, 'hex')
//
// var bytecode ="6060604052341561000c57fe5b5b60a68061001b6000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806339ec021c14603a575bfe5b3415604157fe5b6058600480803560ff16906020019091905050605a565b005b6000600082600a0a60ff16629896800262ffffff1691508190505b5050505600a165627a7a723058201aa083f84301acc104a3de0151822aa682702844181a821c16490689e05d729e0029";
//
// var rawTx = {
// nonce: "0x2",
// gasLimit: "0x2DC6C0",
// gasPrice: "0x000000800",
// value: '0x00',
// data: '0x' + bytecode
// };
//
// var tx = new Tx(rawTx);
// tx.sign(privateKey);
//
// var serializedTx = tx.serialize();
//
// web3.eth.sendSignedTransaction( "0x" + serializedTx.toString('hex'))
// .on('receipt', console.log);
// `
    // var privateKey = new Buffer('e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109', 'hex')
    //
    // var rawTx = {
    //   nonce: '0x00',
    //   gasPrice: '0x09184e72a000',
    //   gasLimit: '0x2710',
    //   to: '0xd271b1446c5FdC42911C4f2d7b2c2Aa19f6c6dF4',
    //   value: '0x01',
    //   data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'
    // }
    //
    // var tx = new Tx(rawTx);
    // tx.sign(privateKey);
    //
    // var serializedTx = tx.serialize();
    //
    // // console.log(serializedTx.toString('hex'));
    // // 0xf889808609184e72a00082271094000000000000000000000000000000000000000080a47f74657374320000000000000000000000000000000000000000000000000000006000571ca08a8bbf888cfa37bbf0bb965423625641fc956967b81d12e23709cead01446075a01ce999b56a8a88504be365442ea61239198e23d1fce7d00fcfc5cd3b44b7215f
    //
    // web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
    // .on('receipt', console.log);
// console.log(web3.eth.accounts.sign('Some data', '0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6'));
// web3.eth.accounts.signTransaction({
//     to: '0xF0109fC8DF283027b6285cc889F5aA624EaC1F55',
//     value: '1000000000',
//     gas: 2000000
// }, '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318')
// .then(console.log);
// 0x9360ea6d3f96efef6011a6aa8b9f5d1f38b6eecc36fd744f0aa2d4f9f70400975e82a9cfa2ed1abb471218c9c6338a12c9a7cc64de9a8b96a8aafee8d3c09c3d1c
// web3.eth.sendTransaction({
//     from: '0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6',
//     to: '0xd271b1446c5FdC42911C4f2d7b2c2Aa19f6c6dF4',
//     value: '10'
// })
// corecontractContract.deploy()
// corecontractContract.deploy({
//     data: contractAddress,
//     arguments: []
// })
  // contract.call().getNumber();
// web3.eth.contract(abiArray).at('0x888dd5489AA9117C2eD82E44f48A4702746A68B4');
// var myContract = new web3.eth.Contract([{}], '0x888dd5489AA9117C2eD82E44f48A4702746A68B4', {
//     from: '0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6', // default from address
//     gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
// });
// var contractAbi = eth.contract(AbiOfContract);
// var myContract = contractAbi.at(contractAddress);
// // suppose you want to call a function named myFunction of myContract
// var getData = myContract.myFunction.getData(function parameters);
// //finally paas this data parameter to send Transaction
// web3.eth.sendTransaction({to:Contractaddress, from:Accountaddress, data: getData});

// console.log(web3.eth.accounts.create());

// web3.eth.personal.newAccount('password');
// web3.eth.personal.sign("", "0x7336c906c7f110ec6465f9a5d89cc774a3981856", "password")
// .then(console.log);
// web3.eth.personal.sign("Hello world", "0xbe7df000c7097e4d1e9c8e009f3441bb197f2bb6", "!@superpassword")
// .then(console.log);
// console.log(eth.accounts.sign('Hello','be7df000c7097e4d1e9c8e009f3441bb197f2bb6', '!@superpassword'));
// web3.eth.personal.unlockAccount("0xbe7df000c7097e4d1e9c8e009f3441bb197f2bb6","!@superpassword");
// console.log(web3.eth.sign('res', 'be7df000c7097e4d1e9c8e009f3441bb197f2bb6'));
// web3.eth.sign
//web3.eth.accounts.privateKeyToAccount
// console.log(web3.eth.accounts.create('2435@#@#@±±±±!!!!678543213456764321§34567543213456785432134567'));
// console.log(web3.eth.accounts)
// web3.eth.personal.newAccount('!@superpassword');
// web3.eth.personal.newAccount('!@superpassword');
// web3.eth.personal.newAccount('!@superpassword');
// web3.eth.accounts.newAccount('!@superpassword');
// console.log(web3.eth.accounts.create());
//'0x4a7766135f8dc53b97bc4e2f58decc7c7774ec5d6de63d73fb3506cfd9843a8b'
// '0x7b197c8346782c7f7513803b7b32bcbf61b85d2063f07157f1eaf3242a7722ba'
// web3.eth.getAccounts(console.log);
// web3.eth.accounts.signTransaction({
//     to: '0x9af1144f8cD53B6B6D6e23664E17ACCBa64B4788',
//     value: '1',
//     gas: 2000000
// }, '0x4a7766135f8dc53b97bc4e2f58decc7c7774ec5d6de63d73fb3506cfd9843a8b')
// .then(console.log);
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
