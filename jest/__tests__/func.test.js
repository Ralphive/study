const Person_bob = require("../func");

describe("All test concerning person Bob", () => {
    
    test("Bob should be 25 years old", () => { //Test
        expect(Person_bob.get_age()).toBe(25); //Assertion to be validated
    })

    test("Non primitive data return", () => { //Test
        expect(Person_bob.get_json()).toEqual({data:"example"}); 
    })

    test("Bob should not be 20 years old", () => { 
        expect(Person_bob.get_age()).not.toBe(20); 
    })

    test("Bob is an adult", () => { 
        expect(Person_bob.get_age()).toBeGreaterThan(18); 
    })

    test("Get bobs friend info", () => {
        expect.assertions(1);
        return Person_bob.get_bobs_friends().then(data =>{
            expect(data.email).toBe("Rey.Padberg@karina.biz") 

        }) 
    })

   })