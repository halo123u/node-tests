const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call the spy correctly', ()=>{
        var spy = expect.createSpy();
        spy('oswaldo',25);
        expect(spy).toHaveBeenCalledWith('oswaldo', 25);
    });

    it('should called saveUser with user object', () =>{
        var email = "oswaldo@example.com";
        var password = "123abc";

       app.handleSignup(email, password);
       expect(db.saveUser).toHaveBeenCalledWith({ email, password}); 
    });
});