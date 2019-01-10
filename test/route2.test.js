const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

const expect = chai.expect;

chai.use(chaiHttp);

describe('App', () => {
    //this.timeout(15000);

    describe('/route2', () => {
        it('responds with status 200', function (done) {
            chai.request(server)
                .get('/route2')
                .end(function (err, res) {
                    console.log(res.body);
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });
});