// 1 Find and Update Element
let fruits = ["apple", "banana", "orange", "grape"];
fruits[2] = "kiwi";

// 2 Add and Remove Elements
let numbers = [2, 4, 6, 8, 10];
numbers.push(12);
numbers.shift();

// 3 Array Concatenation
let firstNames = ["John", "Emma", "Michael"];
let lastNames = ["Doe", "Smith", "Johnson"];
let fullNames = firstNames.concat(lastNames);

// 4 Array Iteration - Sum of Elements
let ages = [25, 30, 18, 42, 15];
let sum = ages.reduce((acc, age) => acc + age, 0);

// 5 Array Filtering - High Scores
let scores = [85, 92, 78, 95, 88];
const filterHighScores = scores => scores.filter(score => score >= 90);

// 6 Array Searching - Index of Element
let countries = ["USA", "Canada", "Mexico", "France", "Germany"];
const findCountryIndex = country => countries.indexOf(country);

// 7 Array Transformation - Square Values
let numbersArray = [3, 7, 1, 9, 4];
const squareNumbers = numbers => numbers.map(number => number ** 2);

// 8 Array Sorting - Ascending Order
let grades = [87, 95, 76, 88, 92];
const sortGradesAscending = grades => grades.slice().sort((a, b) => a - b);

// 9 Array Mapping - Double Values
let data = [10, 20, 30, 40, 50];
const doubleValues = data => data.map(value => value * 2);

// 10 Array Reduction - Maximum Value
let values = [34, 12, 78, 53, 90];
const findMaxValue = values => values.reduce((max, value) => Math.max(max, value), values[0]);

// Objects

let movie = {
  name: "Titanic",
  releaseYear: 1997,
  director: "James Cameron",
  actors: ["Leonardo Dicaprio", "Kate Winslet", "Billy Zane", "Kathy Bates"],
  starActor: {
    name: "Leonardo Dicaprio",
    age: 5,
    born: 1889,
    linkToAwards: "https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Leonardo_DiCaprio",
    headshotLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Leonardo_DiCaprio_2014.jpg/220px-Leonardo_DiCaprio_2014.jpg"
  },
  budgetInMillions: 200
}

// 1 Access the star actor’s age property and change the value to 48.
movie.starActor.age = 48;

// 2 Access the star actor’s born property and change the value to 1989.
movie.starActor.born = 1989;

// 3 Add a new property to the starActor object called isPopular and set its value to true.
movie.starActor.isPopular = true;

// 4 Add a new property to the movie object called isGoodMovie with a value of undefined.
movie.isGoodMovie = undefined;

// 5 Access the actors array, loop through it and check if the movie has “Tom Cruise” in it.
// If true, set isGoodMovie to true, else set isGoodMovie to false.
movie.isGoodMovie = movie.actors.includes("Tom Cruise");

// Make Functions

let cohortFour = {
  classSize: 5,
  instructor: {
    name: "Fred",
    age: 40,
    completedCohortIds: [3, 77, 45, 23],
    email: "fred@fred.com",
    assistant: {
      name: "Brad",
      age: 38,
      email: "Brad@brad.com"
    }
  },
  classGrades: [99, 100, 89, 88, 95]
}

// 1 Check if the class size is > 10
const checkClassSize = classObj => classObj.classSize > 10;

// 2 Check if the instructor has completed more than 2 cohorts.
const checkCompletedCohorts = instructorObj => instructorObj.completedCohortIds.length > 2;

// 3 Create a function called changeAssistant that will change the name, age, and email of the assistant.
const changeAssistant = (classObj, newName, newAge, newEmail) => {
  classObj.instructor.assistant.name = newName;
  classObj.instructor.assistant.age = newAge;
  classObj.instructor.assistant.email = newEmail;
}

//4 Loop through the completedCohortIds array and check if Fred completed cohort 55
const didFredCompleteCohort55 = (classObj, cohortId) => {
    for (let completedCohortId of classObj.instructor.completedCohortIds) {
        if (completedCohortId === cohortId) {
            return true;
        }
    }
    return false;
}

const fredCompletedCohort55 = didFredCompleteCohort55(cohortFour, 55);

console.log("Did Fred complete cohort 55?", fredCompletedCohort55);


//5 Loop through the classGrades and check if the average grade is > 90
function calculateAverageGrade(classGrades) {
    let sum = 0;
    for (let grade of classGrades) {
        sum += grade;
    }
    let average = sum / classGrades.length;
    return average;
}

const averageGrade = calculateAverageGrade(cohortFour.classGrades);

// Check if average grade is > 90
const isAverageGradeAbove90 = averageGrade > 90;

console.log("Is the average grade above 90?", isAverageGradeAbove90);
