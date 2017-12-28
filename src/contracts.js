import Web3 from'web3';
import Eth from'web3-eth';
import Accounts from'web3-eth-accounts';
import Personal from'web3-eth-personal';
import EthContract from'ethjs-contract';
import Tx from'ethereumjs-tx';
import BigNumber from 'bignumber.js';
import { contractConfig, donation, donation5, documents, usersCrad, a100donation } from'./abi';

var web3 = new Web3();
var web3_provider = 'http://localhost:8545';
var eth = new Eth(Eth.givenProvider || web3_provider);
var accounts = new Accounts(web3_provider);
var personal = new Personal(web3_provider);
web3.setProvider(new Web3.providers.HttpProvider(web3_provider));

// var privateKey = '0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6';
// web3.eth.personal.sign('Hello world', privateKey, '!@superpassword')

// var batch = new web3.eth.BatchRequest();
//

export function unlockAccount(privateKey, password) {
  console.log(privateKey);
  return web3.eth.personal.unlockAccount(privateKey,password, 15000).then(data => {
    console.log(data);
    return data
  })
}

export async function addNumber(privateKey, password) {
  console.log('contractConfig.abi', contractConfig.abi);
  console.log('contractConfig.contractAddress', contractConfig.contractAddress);
  console.log(privateKey, password);
  await web3.eth.personal.unlockAccount(privateKey, password, 15000);
  const contract = new web3.eth.Contract(contractConfig.abi, contractConfig.contractAddress);
  return contract.methods.add().send({from: privateKey}).then(data => {
    console.log('addNumber function', data)
    return data
  }).catch(error => {
    console.log('error', error);
  });
}

export function signUp(password) {
  console.log(password);
  return web3.eth.personal.newAccount(password).then(address => {
    return address
  })
}

export function sendTransaction(password, from, to, value) {
  web3.eth.personal.unlockAccount(from, password, 15000)

  transactionObject = {
    from,
    to,
    value
  }

  console.log('from', web3.eth.getBalance(from));
  console.log('to', web3.eth.getBalance(to));
  web3.eth.getBalance(from).then(balance => {
    console.log('balance', balance);
  });
  web3.eth.sendTransaction(transactionObject)

}

export async function addSender(to, from, count, password) {
  const contract = new web3.eth.Contract(a100donation.abi, a100donation.contractAddress);

  const addSender = await contract.methods.addSender(to).send({from:from, gas: 4000000, value: new BigNumber(count)});

  return addSender;
};

export async function addUser(password, from, title, description, count, countNow) {
  const contract = new web3.eth.Contract(a100donation.abi, a100donation.contractAddress);

  contract.methods.addUser(title, description, count*1000000000000000000, countNow*1000000000000000000).send({from: from, gas: 3000000}).then(data => {
    console.log(data);
    return data
  });
};

export async function getUsers() {
  var dat = [];
  const contract = new web3.eth.Contract(a100donation.abi, a100donation.contractAddress);
  const count = await contract.methods.countRecipients().call();

  for(var i = 0; i < count; i++){
    dat[i] = await contract.methods.returnRecipientById(i).call();
  }
  console.log('dat', dat);
  return dat;
}

export async function getUsersByKey(privateKey) {
  var dat = [];
  const contract = new web3.eth.Contract(a100donation.abi, a100donation.contractAddress);
  const count = await contract.methods.countRecipients().call();
  let j = 0
  console.log('privateKey', privateKey);
  for(var i = 0; i < count; i++){
    let recipient = await contract.methods.returnRecipientById(i).call();
    console.log('recipient',recipient);
    if(recipient['0'] ===  privateKey) {
      dat[j] = recipient;
      j++;
    }
  }
  console.log('dat', dat);
  return dat;
}


export async function addDocs(password, from, title, description) {
  var dat = [];
  const contract = new web3.eth.Contract(documents.abi, documents.contractAddress);
  const count = await contract.methods.addDocument(title, description).send({from: from});
}

export async function adduserscrad(privateKey, password, email, age) {
  var dat = [];
  const contract = new web3.eth.Contract(usersCrad.abi, usersCrad.contractAddress);
  const count = await contract.methods.insertUser(privateKey, email, age).send({from: privateKey});
}

export async function getBalance(privateKey) {
  return web3.eth.getBalance(privateKey).then(res => {
    return web3.utils.fromWei(res, 'ether');
  });
}
