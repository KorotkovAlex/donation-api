import request from 'supertest';

import { contractConfig } from './abi';
import { app } from './app'

describe('request to api', () => {
  test('returns Hello wold', () => {
    return request(app).get('/').then((response) => {
      const result = {
        hello: 'world'
      }
      expect(response.body).toEqual(result);
    });
  });

  test('login user', () => {
    const usersData = {
      password: '1234',
      privateKey: '0x8a84331220Db20A067D571EE950F881F98b7BD43'
    }

    return request(app).post('/login').send(usersData).then((response) => {
      expect(response.body).toBeTruthy();
    });
  });

  test('add number', () => {
    const usersData = {
      password: '!@superpassword',
      privateKey: '0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6'
    }

    return request(app).post('/addnumber').send(usersData).then((response) => {
      console.log('addnumber', response.body);
      expect(response.body).toBeTruthy();
    });
  });

  test('take money', () => {
    const params = {
      password: '!@superpassword',
      from: '0xbE7dF000c7097e4d1E9C8e009f3441bB197F2bB6',
      to: '0x8a84331220Db20A067D571EE950F881F98b7BD43',
      value: '1.23400041e+21',
    }

    return request(app).post('/takemoney').send(params).then((response) => {
      console.log('take money', response.body);
      expect(response.body).toBeTruthy();
    });
  });
});
