const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33,11);

    expect(res).toBe(44).toBeA('number');
    // if (res !==44){
    //     throw new Error(`Expected 44, but got ${res}`);
    // }
});

it('should async add two numbers', (done)=>{
    utils.asyncAdd(4,3,(sum)=>{
        expect(sum).toBe(7).toBeA('number');
        done();
    })
});

it('should square one number', () =>{
    var res = utils.square(10);
    
    expect(res).toBe(100).toBeA('number');
});
it('should async square a number',(done)=>{
    utils.asyncsquare(10 ,(square) =>{  
        expect(square).toBe(100).toBeA('number');
        done();
    });
});

// it('should expect some values',()=>{
   
// //    expect({name: 'oswaldo'}).toEqual({name: 'oswaldo'});
// // expect([2,3,4]).toExclude(1);    
//     expect({
//         name: 'oswaldo',
//         age: 22,
//         location: 'New York'
//     }).toInclude({
//         age:22
//     });

// });

it('should set firstName and Last name', () =>{
    var user1 = {
        age: 25,
        location: 'New York'
    };
    var res = utils.setName(user1,"oswaldo almazo");

    expect(res).toInclude({
            firstName: 'oswaldo',
            lastName: 'almazo'

    }).toBeA('object');


});
