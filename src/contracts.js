var Web3 = require('web3');
var Eth = require('web3-eth');
var Accounts = require('web3-eth-accounts');
var Personal = require('web3-eth-personal');
const EthContract = require('ethjs-contract');
var Tx = require('ethereumjs-tx');

var abi = require('./abi.js');
var web3 = new Web3();
var web3_provider = "http://localhost:8545";
var eth = new Eth(Eth.givenProvider || web3_provider);
var accounts = new Accounts(web3_provider);
var personal = new Personal(web3_provider);
web3.setProvider(new Web3.providers.HttpProvider(web3_provider));

var privateKey = '0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6';
// web3.eth.personal.sign("Hello world", privateKey, "!@superpassword")

// var batch = new web3.eth.BatchRequest();
//
function unlockAccount(privateKey, password) {
  unlockAccount(privateKey, password);
  web3.eth.personal.unlockAccount(privateKey,"!@superpassword", 15000)
}
function addNumber(privateKey, password) {

  var contractAddress = "0xbBB0aDE3bda1a9c6764eEF1924Ffc585EDA51bcC";
  var abi2 = [ { "constant": false, "inputs": [], "name": "add", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [], "name": "subtract", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "getCounter", "outputs": [ { "name": "", "type": "uint256", "value": "6" } ], "payable": false, "stateMutability": "view", "type": "function" } ];
  var corecontractContract = new web3.eth.Contract(abi2,contractAddress);



}

corecontractContract.methods.add().send({from: privateKey, value : 120000})

// batch.add(web3.eth.getBalance.request(privateKey, 'latest', function(error, result){
//   console.log('error: ', error);
//   console.log('set', result);
// }));
//
// batch.add(corecontractContract.methods.subtract().send({from: privateKey}, function(error, result){
//   console.log('error: ', error);
//   console.log('get', result);
//   web3.eth.sendTransaction({
//       from: privateKey,
//       to: '0xBcEe874F66313a1181158d38eAf3d7DF16605b68',
//       value: '1000000000000000000',
//       data: result
//   })
// }));
//
//
//
// batch.execute();
//
// web3.eth.sendTransaction({
//     from: privateKey,
//     to: '0xd271b1446c5FdC42911C4f2d7b2c2Aa19f6c6dF4',
//     value: '1000000000000000000'
// })
// .then(function(receipt){
//     console.log(receipt);
// });
//
// var contractAbi = web3.eth.contract(ethContracts.abiMedicalStaffObject);
// var myContract = contractAbi.at(address);
// // suppose you want to call a function named newTrip of myContract
// var getData = myContract.newTrip.getData(zonesArray[0], zonesArray[1], zonesArray[2], zonesArray[3], name, startDate, duration);
// //finally paas this data parameter to send Transaction
// web3.eth.sendTransaction({to:address, from:organisationWallet, data: getData});
//
//
// web3.eth.accounts.wallet.create(2, '54674321§3456764321§345674321§3453647544±±±§±±±!!!43534534534534');
// console.log(web3.eth.accounts.wallet);
// var code = "603d80600c6000396000f3007c01000000000000000000000000000000000000000000000000000000006000350463c6888fa18114602d57005b6007600435028060005260206000f3";
//
//
// // using the callback
// web3.eth.sendTransaction({
//     from: privateKey,
//     data: code // deploying a contracrt
// });

  // batch.execute();

// callContract();
// web3.setProvider(new Web3.providers.HttpProvider(web3_provider));
// .then(console.log);
// // web3.eth.personal.sign("Hello world", "0xbe7df000c7097e4d1e9c8e009f3441bb197f2bb6", "!@superpassword").then(console.log);
//
//
// batch.add(corecontractContract.methods.setNumber(10).send({from: '0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6'}, function(error, result){
// console.log('error: ', error);
// console.log('set', result);
// }));
//
// // web3.eth.personal.sign("Hello world", "0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6", "!@superpassword")
// // web3.eth.personal.unlockAccount("0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6","!@superpassword");
// corecontractContract.methods.setNumber(10).send({from: '0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6'}, function(error, result){
// console.log('error: ', error);
// console.log('set', result);
// })
// .then(console.log);
