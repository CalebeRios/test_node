/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');

let should = chai.should();

chai.use(chaiHttp);

describe('test', () => {
  it('get', (done) => {
    chai.request(server).get('/').end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });
});
