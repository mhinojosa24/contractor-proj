const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
const Donor = require('../models/donor');

const sampleDonation = {
    "companyName": "Welsfargo",
    "amount": "5,000.00",
    "description": "For charity."
}

chai.use(chaiHttp);

describe('Donors', () => {

    // TEST DONORS
    describe('Donors', () => {

        it('should index ALL donors on / GET', (done) => {
            chai.request(server).get('/').end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;// checking response, should be type html
                done();
            });
        });
    });

    //  TEST NEW
    it('should display new form on /reviews/new GET', (done) => {
        chai.request(server).get(`/donors/new`).end((err, res) => {
            res.should.have.status(200);
            res.should.be.html;
            done();
        });
    });

    // TEST SHOW
    it('should show a SINGLE review on /donors/<id> GET', (done) => {
        var donators = new Donor(sampleDonation);
        donators.save((err, data) => {
            chai.request(server).get(`/donors/${data._id}`).end((err, res) => {
                res.should.have.status(200);
                res.should.be.html;
                done();
            });
        });
    });
});
