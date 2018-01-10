//
// object distructuring
//

// const person = { 
  
//     age: 32,
//     location :{
//         city: 'Sydney',
//         temp: 40
//     }
// }
// const {name: firstName = 'Anonymous', age} = person;

// console.log(`My name is ${firstName} and I am ${age}`);

// const { city , temp : temprature} = person.location;
// console.log(`${city} is ${temprature} degree now`);

const book = {
    name: 'Ego',
    author : 'Holiday',
    publisher :{
        name: 'penguin',
        date: '2017'
    }
}
const { name: publisherName = 'self-published'} = book.publisher;
console.log(publisherName);

//
//Array distructuring 
//

const item = ['coffee (hot)', '$3.0', '$3.50' , '$4.00'];

const [itemName,,regular] = item;
console.log(` the price of regular ${itemName} is ${regular}`);