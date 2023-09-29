//#######################################################
//Challenge 1 solution
// const people = [
//   {
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john@gmail.com',
//     phone: '111-111-1111',
//     age: 30,
//   },
//   {
//     firstName: 'Jane',
//     lastName: 'Poe',
//     email: 'jane@gmail.com',
//     phone: '222-222-2222',
//     age: 25,
//   },
//   {
//     firstName: 'Bob',
//     lastName: 'Foe',
//     email: 'bob@gmail.com',
//     phone: '333-333-3333',
//     age: 45,
//   },
//   {
//     firstName: 'Sara',
//     lastName: 'Soe',
//     email: 'sara@gmail.com',
//     phone: '444-444-4444',
//     age: 19,
//   },
//   {
//     firstName: 'Jose',
//     lastName: 'Koe',
//     email: 'jose@gmail.com',
//     phone: '555-555-5555',
//     age: 23,
//   },
// ];

// const youngPeople = people
//   .filter(function (people) {
//     return people.age >= 1 && people.age <= 25;
//   })
//   .map(function (people) {
//     return {
//       name: `${people.firstName}` + ` ${people.lastName}`,
//       email: people.email,
//     };
//   });

// console.log(youngPeople);

//#######################################################
//Challenge 2 solution, using for loop
// const numbers = [2, -30, 50, 20, -12, -9, 7];

// function num(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) {
//       sum += numbers[i];
//     }
//   }
//   return sum;
// }

// const positiveSum = num(numbers);
// console.log(positiveSum);

//#######################################################
//Challenge 3 solution
