import request from 'supertest';

// import * as contracts from './contracts';
import { contractConfig } from './abi';
import { app } from './app'


describe('request to api', () => {
//   test('returns Hello wold', () => {
//     return request(app).get('/').then((response) => {
//       const result = {
//         hello: 'world'
//       }
//       expect(response.body).toEqual(result);
//     });
//   });
//
//   // test('signup user', () => {
//   //   const password = {
//   //     password: '1234'
//   //   }
//   //
//   //   return request(app).post('/signup').send(password).then((response) => {
//   //     console.log(response.body);
//   //     expect(response.body.password).toEqual(password);
//   //   });
//   // });
// // getBalance
//
//   test('get balance', () => {
//     const usersData = {
//       password: '1234',
//       privateKey: '0x8a84331220Db20A067D571EE950F881F98b7BD43'
//     }
//
//     return request(app).post('/getbalance').send(usersData).then((response) => {
//       console.log('/getBalance',response.body);
//       expect(response.body).toBeTruthy();
//     });
//   });
//
//   test('login user', () => {
//     const usersData = {
//       password: '1234',
//       privateKey: '0x8a84331220Db20A067D571EE950F881F98b7BD43'
//     }
//
//     return request(app).post('/login').send(usersData).then((response) => {
//       console.log('/login',response.body);
//       expect(response.body).toBeTruthy();
//     });
//   });
//
//   test('add number', () => {
//     const usersData = {
//       password: '!@superpassword',
//       privateKey: '0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6'
//     }
//
//     return request(app).post('/addnumber').send(usersData).then((response) => {
//       console.log('addnumber', response.body);
//       expect(response.body).toBeTruthy();
//     });
//   });
//
//   test('add user', () => {
//     const usersData = {
//       password: '!@superpassword',
//       from: '0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6',
//       title: "testTitle",
//       description: "testDescription",
//       count: 10,
//       countNow: 0
//     }
//
//     return request(app).post('/adduser').send(usersData).then((response) => {
//       console.log('adduser', response.body);
//       expect(response.body).toBeTruthy();
//     });
//   });
//
//   test('add docs', () => {
//     const usersData = {
//       password: '!@superpassword',
//       from: '0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6',
//       title: "testTitle",
//       description: "testDescription"
//     }
//
//     return request(app).post('/adddocs').send(usersData).then((response) => {
//       console.log('add docs', response.body);
//       expect(response.body).toBeTruthy();
//     });
//   });
//
//   test('insert User', () => {
//     const usersData = {
//       password: '!@superpassword',
//       privateKey: '0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6',
//       email: '0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6',
//       age: 10
//     }
//
//     return request(app).post('/adduserscrad').send(usersData).then((response) => {
//       console.log('adduserscrad', response.body);
//       expect(response.body).toBeTruthy();
//     });
//   });

  test('getUsersByKey', () => {
    const usersData = {
      privateKey: '0x8a84331220Db20A067D571EE950F881F98b7BD43',
    }

    return request(app).post('/getusersbykey').send(usersData).then((response) => {
      console.log('adduserscrad', response.body);
      expect(response.body).toBeTruthy();
    });
  });

  // export async function addUser(password, from, title, description, count, countNow) {
  //   console.log('password, from, title, description, count, countNow', password, from, title, description, count, countNow);
  //   await web3.eth.personal.unlockAccount(from, password, 15000)
  //   const contract = new web3.eth.Contract(donation5.abi, donation5.contractAddress);
  //   // const addUser = await contract.methods.addUser(title, description, count, countNow).send({from: from});
  //   return contract.methods.addUser(title, description, count, countNow).send({from: from}).then(data => {
  //     console.log('add', data)
  //     return data
  //   }).catch(error => {
  //     console.log('error', error);
  //   });
  // };

  // test('take money', () => {
  //   const params = {
  //     password: '!@superpassword',
  //     from: '0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6',
  //     to: '0x8a84331220Db20A067D571EE950F881F98b7BD43',
  //     value: '1.23400041e+21',
  //   }
  //
  //   return request(app).post('/takemoney').send(params).then((response) => {
  //     console.log('take money', response.body);
  //     expect(response.body).toBeTruthy();
  //   });
  // });
  //
  // test('getUsers', () => {
  //   // const params = {
  //   //   password: '!@superpassword',
  //   //   from: '0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6',
  //   //   to: '0x8a84331220Db20A067D571EE950F881F98b7BD43',
  //   //   value: '1.23400041e+21',
  //   // }
  //
  //   return request(app).post('/getUsers').send().then((response) => {
  //     console.log('getUsers', response.body);
  //     expect(response.body).toBeTruthy();
  //   });
  // });
});
