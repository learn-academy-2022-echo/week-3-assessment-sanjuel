// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

//Pseudo Code
//First I will create a function that takes in a number.
//the output will be an array
// i will use a for loop to iterate over all of the numbers
// the function will add the number directly in front of it to create the next number in the sequence. 


// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("perfectSpin", () => {
    it("takes in a number more than 2, and returns an array with the length that corresponds to the fibonacci sequence", () => {
     expect(perfectSpin(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
     expect(perfectSpin(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})


// b) Create the function that makes the test pass.

const perfectSpin = (num) => {
let spin = [0, 1]
    for(let i = 2; i <= num; i++) {
        spin.push(spin[i-2] + spin[i-1])
        return spin
    }
}
console.log(perfectSpin(fibLength2))
console.log(perfectSpin(fibLength2))

// I couldn't figure this out, and spent a whole lot of it doing exactly what Austin told us not to do, and researching the fibonacci spiral. I ended up finding that we need an array that starts with 0, 1 because the fibonnaci spiral always starts like that. I think I'm on the right track here, but I have no idea how to finish this code. 

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("onlyOdd", () => {
    it("takes in an array, returns a new array of only odd nubmers ssorted from least to greatest", () => {
     expect(onlyOdd(fullArr1)).toEqual([-9, 7, 9, 199])
     expect(onlyOdd(fullArr2)).toEqual([-823, 7, 23])
    })
})


const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.

const onlyOdd = (arr) => {
    const oddArray = arr.filter((oddArr) => typeof oddArr === "number" && oddArr % 2 !== 0)
    return oddArray.sort((a, b) => a-b)
}
console.log(onlyOdd(fullArr1))
console.log(onlyOdd(fullArr2))

//This one was hard for me because I ran into the same issue I have a lot of the time, in where I know what to do, but not how to do it. i think i really need to work on understanding the syntax of things, because when I'm doing it i know I need to use the .filter higher order function, and to use typeof and all that, but putting everything together where it needs to go is difficult for me. I did also have to look up the syntax for the .sort function. 



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("addNumbers", () => {
    it("takes in an array and returns an array of the accumulating sum.", () => {
     expect(addNumbers(numbersToAdd1)).toEqual([2, 6, 51, 60])
     expect(addNumbers(numbersToAdd2)).toEqual([0, 7, -1, 11])
     expect(addNumbers(numbersToAdd3)).toEqual([])
    })
})


const numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.

const addNumbers = (arr) => {
 return arr.map((newSum => value => newSum += value))
}

console.log(addNumbers(numbersToAdd1))

// [Function (anonymous)],
//   [Function (anonymous)],
//   [Function (anonymous)],
//   [Function (anonymous)]

//I keep getting this back. I'm not sure why, I tried to use the .map higher order function to map over the array and create a new one that added ever number together. Like i mentioned before, I think I know what to do, but not how to do it. I need to study syntax more. 