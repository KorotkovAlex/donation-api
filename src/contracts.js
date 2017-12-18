import Web3 from'web3';
import Eth from'web3-eth';
import Accounts from'web3-eth-accounts';
import Personal from'web3-eth-personal';
import EthContract from'ethjs-contract';
import Tx from'ethereumjs-tx';
import { contractConfig } from'./abi';

var web3 = new Web3();
var web3_provider = 'http://localhost:8545';
var eth = new Eth(Eth.givenProvider || web3_provider);
var accounts = new Accounts(web3_provider);
var personal = new Personal(web3_provider);

web3.setProvider(new Web3.providers.HttpProvider(web3_provider));

export function unlockAccount(privateKey, password) {
  console.log(privateKey);
  return web3.eth.personal.unlockAccount(privateKey,password, 15000).then(data => {
    console.log(data);
    return data
  })
}

export function addNumber(privateKey, password) {
  console.log('contractConfig.abi', contractConfig.abi);
  console.log('contractConfig.contractAddress', contractConfig.contractAddress);
  console.log(privateKey, password);
  const contract = new web3.eth.Contract(contractConfig.abi, contractConfig.contractAddress);
  return contract.methods.add().send({from: privateKey}).then(data => {
    console.log('add', data)
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
  web3.eth.personal.unlockAccount(from,password, 15000)

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
