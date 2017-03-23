const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

describe('Server', () =>{
    describe('get /', ()=>{
        it('should return hello world response', (done) => {
    request(app)
        .get('/')
        .expect(404)
        .expect((res)=>{
            expect(res.body).toInclude({
                error: 'Page not found'
            });

        })
        .end(done);
        });
    });

    describe('get /users', () => {
        it('should return my users', (done)=>{
    request(app)
        .get('/users')
        .expect(200)
        .expect((res)=>{
            expect(res.body).toInclude({
                name: 'oswaldo',
                age: 22
            })
        })
        .end(done);
        });     
    });
});