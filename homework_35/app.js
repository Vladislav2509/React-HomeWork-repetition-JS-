const users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
        
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
];

// Typing

// type Users = {
//     name: String;
//     phone: String;
//     email: String;
//     animals: String;
//     cars: String;
//     hasChildren: boolean;
//     hasEducation: boolean;
// };

// =============================================================================================



// Task_1

// Metod1
// function nameUsers(users) {
//     let array = users.map((element) => element.name);
//     let result = array.join(", ");
//     return result;
//   }

//   console.log(nameUsers(users));


// Metod2
// const nameUsers = "Harry Felton, May Sender, Henry Ford";

// console.log(nameUsers.split(','))

// =============================================================================================



// Task_2

// Metod1
// function countOfCars(userCars) {
//     const carCount = [];
//     userCars.forEach((element) => {
//       if (element.cars) {
//         carCount.push(element.cars.length);
//       }
//     });
//     let result = carCount.reduce((accumulate, element) => accumulate + element);
//     return result;
//   }

//   console.log(countOfCars(users));


// Metod2
// const cars = ["ford", "audi", "bmw"];
// const carCount = cars.length;

// console.log(carCount);

// =============================================================================================
  


// Task_3
  
// function usersEducation(users) {
//     const educationCount = [];
//     users.filter((element) => {
//       if (element.hasEducation) {
//         educationCount.push(element.name);
//       }
//     });
//     return educationCount;
//   }
  
//   console.log(usersEducation(users));

// =============================================================================================


  
// Task_4
  
//   function usersAnimals(users) {
//     const animals = [];
//     users.forEach((element) => {
//       if (element.animals) {
//         animals.push(element.name);
//       }
//     });
//     return animals;
//   }
  
//   console.log(usersAnimals(users));

// =============================================================================================
  


// Task_5

// function carName(userCars) {
//     const carCount = [];
//     userCars.forEach((element) => {
//       if (element.cars) {
//         carCount.push(element.cars);
//       }
//     });
//     let result = carCount.join(',');
//     return result;
//   }

//   console.log(carName(users));