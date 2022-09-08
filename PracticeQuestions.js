////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////

const x = 6;

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.
let firstNum = 5;
let secondNum = 1;

function getSum() {
  let sum = firstNum + secondNum;
  let total = sum + x;
  console.log("Question 1", total);
  return total;
}
getSum();

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.
const getSumTwo = () => {
  let sum = firstNum + secondNum;
  let total = sum + x;
  console.log("Question 2: ", total);
  return total;
};
getSumTwo();

// 3. Write a function that returns another function. (use arrow functions please)
const returnGetSum = () => {
  console.log("Question 3: ");
  return getSum();
};

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.

///////// insideFunc has access to "y" because both are inside the function getFunction
const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;
  console.log(
    'Question 4 answer: insideFunc has access to "y" because both are inside the function getFunction'
  );
  console.log("");

  return insideFunc;
};

console.log(getFunction()(2));

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  if (Math.ceil(Math.random() * 2) < 2) {
    throw new Error("Error was thrown");
  }

  return "success";
};

const getcallBackFunction = () => {
  try {
    result = couldThrowError();
    console.log("Question 5: ", result);
  } catch (Error) {
    console.log("Question 5: Sorry, there was an error.");
  }
};

getcallBackFunction();

////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////

const userData = [
  {
    id: "111",
    name: "Peter",
    favorites: {
      food: ["burgers", "pizza"],
      activites: ["basketball", "baseball"],
    },
  },
  {
    id: "222",
    name: "John",
    favorites: {
      food: ["burgers", "tacos"],
      activites: ["football", "golf"],
    },
  },
  {
    id: "333",
    name: "Mary",
    favorites: {
      food: ["pizza", "tacos", "fried chicken"],
      activites: ["volleyball", "softball"],
    },
  },
];

// 6. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const numberFive = userData.map((user) => {
  const id = user.id;

  const favoriteFoods = user.favorites.food.length;

  return { id, favoriteFoods };
});
console.log("Question 6: ", numberFive);

// 7. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const numberSix = userData.reduce((acc, curr) => {
  if (curr.favorites.food.includes("pizza")) {
    //push elements with pizza as favorite food into a new array
    acc.push(curr.name);
  }
  //return this array
  return acc;
}, []);
console.log("Question 7: ", numberSix);

// 8. Show an an example of a switch statement being used

const numberSeven = "case3";
switch (numberSeven) {
  case "case1":
    console.log("This will work if case1 is chosen");
    break;
  case "case2":
    console.log("This will work if case2 is chosen");
    break;
  case "case3":
    console.log("Question 8:");
    console.log("This will work if case3 is chosen. (it works!!!!)");
    break;
  default:
    console.log("choose a case");
}
////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////

const userPersonalData = {
  name: "peter",
  age: "56",
  birthday: "jan 1st",
};
const userGameData = {
  score: 4546,
  accomplishments: [
    "won award for being good gamer",
    "won 1st win",
    "got good score on the weekend",
  ],
};

// 9. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

const combinedUserData = { ...userPersonalData, ...userGameData };
console.log("Question 9: ", combinedUserData);

// 10. Make a copy of your new user object but override the birthday to december 31st

combinedUserData.birthday = "December 31st";
console.log("Question 10: ", combinedUserData);
// 11. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

const accomplishmentsArray = [...combinedUserData.accomplishments];
console.log("Question 11 accomplishments array: ", accomplishmentsArray);

//  12.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: "pete",
  age: "32",
  favoriteThings: {
    food: ["pizza", "tacos", "burgers", "italian"],
    movies: [],
  },
};

const food = user.favoriteThings.food;
console.log("Question 12: ", food);

// 13. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //

const [firstFood, secondFood] = food;
console.log("Question 13: ", [firstFood, secondFood]);

// 14. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food.
//    the food variable should have all the array items starting from the third one.
const data = ["peter", "34", "apple", "oranges", "pizza", "tacos"];
const [name, age, ...foods] = data;
console.log("Question 14: ", name, age, foods);

// 15. use object destructuring to grab the following from the userInfo object:
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: "Peter",
  favorites: {
    needs: {
      food: ["burger", "pizza", "tacos", "fried chicken", "sushi"],
    },
    wants: {
      things: ["cars", "jewelry"],
    },
  },
};

const userName = userInfo.name;
const favoriteFood = userInfo.favorites.needs.food;
const favoriteThings = userInfo.favorites.wants.things;
const [firstWant, secondWant] = favoriteThings;
const favoriteThing = firstWant;
const secondFavoriteThing = secondWant;

console.log(
  "Question 15: ",
  userName,
  favoriteFood,
  { favoriteThing },
  { secondFavoriteThing }
);

var fetchData = () =>
  new Promise((resolve, reject) => {
    console.log("fetchingData from imaginary database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        if (Math.ceil(Math.random() * 2) < 2) {
          throw new Error("Error!");
        }
        resolve({ name: "john", age: 42 });
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });

module.exports = fetchData;

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () =>
  new Promise((resolve, reject) => {
    console.log("fetchingData from imaginary database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        if (Math.ceil(Math.random() * 2) < 2) {
          throw new Error("Error!");
        }
        resolve({ name: "john", age: 42 });
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetchData().then(
  (value) => {
    console.log("Question 16: ", value);
  },
  (error) => {
    console.log("Question 16: ", error.message);
  }
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 17. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const questionSixteen = async () => {
  try {
    const value = await fetchData();
    console.log("Question 17: ", value);
  } catch (error) {
    console.log("Question 17: ", error.message);
  }
};
questionSixteen();
