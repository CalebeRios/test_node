/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

const should = chai.should();

chai.use(chaiHttp);

describe('test', () => {
  it('get', (done) => {
    chai.request(server).get('/').end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });
});
