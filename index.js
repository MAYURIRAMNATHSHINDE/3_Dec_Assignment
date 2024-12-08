/**************************  Q.No.1************************** */

let multiply=(a=1,b=1)=>{
    return a*b;
}
console.log(multiply(3,4))

/*******************  Q.No 2 ******************* */
let num=3;
let obj={
    square:num*num,
    cube:num*num*num,

}
let operation=(num)=> obj;
console.log(operation())

/************************** Q.No 3************************ */

const people = [ {
    name: "Alice",
    address: {
        city: "New York",
        street: { 
            name: "Broadway",
            number: 653 
        } 
    } 
    },
    {
        name: "Bob",
        address: {
            city: "Los Angeles",
            street: {
                name: "Sunset Boulevard",
                number: 936 
            } 
        } 
    },
    {
        name: "Emili",
        address: {
            city: "Londan",
            street: {
                name: "M.G Street",
                number: 366 
            } 
        } 
    },
    
    ];

    people.forEach(i=>{
        console.log(`${i.name} lives in ${i.address.city} on ${i.address.street.name}`)
    })
    
    /*********************************** Q.No 4************************************* */

const profile = { 
    name: "Charlie",
    age: 29,
    address: {
        city: "San Francisco",
        zipcode: "94101"
    } 
};

 const updates = {
    age: 30,
    address: {
        zipcode: "94109",
        country: "USA" 
    }
};

let profile1={...profile,...updates,address: {
    ...profile.address,
    ...updates.address,
},}
console.log(profile1)