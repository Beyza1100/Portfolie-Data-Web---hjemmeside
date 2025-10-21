//Opgave 2  Startup Name Generator
// 1) Here we have our two word lists (arrays)
// Green words = index
//firstword array, words are taking from the gitbook
const firstword = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];
//secondword array, words are taking from the gitbook
const secondword = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

//Get random index between
const getStartUpName =() =>{
    const firstNum = Math.floor(Math.random() * firstword.length)
    const secondNum = Math.floor(Math.random() * secondword.length)
    return `${firstword[firstNum]}${secondNum[secondNum]}`
}
console.log("Your startup name is: " + getStartUpName())



//Opgave 3
//level 1:
// The island is represented by a 1D array with 5 elements.
// '-' = empty spot, 'T' = treasure.
const island = ['-', '-', '-', 'T', '-'];

console.log(`There are ${island.length} moves in the island`)



//Level 2:
const island1 = ['-', '-', 'T',  '-', '-'];
// The island is an array with 5 spots – only one of them ('T') is a treasure.

// Counts treasures
let treasures = 0

console.log("There's " + island1.length + " moves on this island");
// .length shows how many spots there are on the island (5 in total)

// Goes through each spot one by one (i = 0, 1, 2, 3, 4)
for (let i = 0; i < 5; i++){

    if (island1[1]=== 'T'){
        // Checks if the spot at position I contains 'T' (meaning a treasure)

        console.log('treasure found at move $ {i + 1} :)');
        // If more than one is found

        treasures++;
        // Adds 1 to the counter each time a treasure is found

    }else {
        console.log('no treasure found');
        // If the spot is not 'T', it logs that no treasure was found
    }
}

console.log('There are ' + treasures + ' treasures at this island');
// Finally, it shows the total number of treasures found



//Level 3:
const island7 = ['-', 'T', '-', 'T', '-'];

// We count how many treasures we find. We start at 0.
let treasures1 = 0;

// We go through each spot on the island one at a time
for (const cell of island7){

    // If our spot is a treasure ('T'), we add 1 to the counter
    if (cell === 'T'){
       treasures1++;
    }
}

// Here we log out and see how many treasures there are
console.log(`There are ${treasures} treasures on the island`);



//Level 4 - Student Grades Analysis
//1.Create an array
const Studentgrades= [82,73,64,52,41,37,24,16]

//2. Log out how many grades there are
console.log(Studentgrades.length);

//3.Classify and log each grade into one of the following categories
for (const grade of Studentgrades) {
    if (grade >= 90) {
        console.log(`Grade: ${grade} -> A`);
    } else if (grade >= 80) {
        console.log(`Grade: ${grade} -> B`);
    } else if (grade >= 70) {
        console.log(`Grade: ${grade} -> C`);
    } else if (grade >= 60) {
        console.log(`Grade: ${grade} -> D`);
    } else {
        console.log(`Grade: ${grade} -> F`);
    }
}

//4.Evaluate overall class performance

if (Studentgrades.length === 0) {
    console.log("No grades to evaluate.");
} else {
    const sum = Studentgrades.reduce((acc, g) => acc + g, 0);
    const average = sum / Studentgrades.length;

    let performance;
    if (average >= 90) {
        performance = "Excellent";
    } else if (average >= 80) {
        performance = "Good";
    } else if (average >= 70) {
        performance = "Satisfactory";
    } else {
        performance = "Needs Improvement";
    }
    console.log(`average: ${average.toFixed(2)} -> ${performance}`);
}

//6. Output
let grades = [85, 92, 78, 63, 95, 88, 72, 54, 81, 67];

//The highest grade with its category.
let highest = grades[0]; // start with the first number

for (let i = 1; i < grades.length; i++) {
    if (grades[i] > highest) {
        highest = grades[i];
    }
}

console.log(highest);



//The lowest grade with its category.
    let lowest = grades[0];

    for (let i = 1; i < grades.length; i++) {
        if (grades[i] < lowest) {
            lowest = grades[i];
        }
    }

    console.log(lowest);



//The average grade.
let sum = 0;

for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
}

let average = sum / grades.length;
console.log("average:", average);


//A list of all grades with their corresponding categories.
for (let i = 0; i < grades.length; i++) {
    let grade = grades[i];
    let category = "";

    if (grade >= 90) category = "A";
    else if (grade >= 80) category = "B";
    else if (grade >= 70) category = "C";
    else if (grade >= 60) category = "D";
    else category = "F";

    console.log(grade + ": " + category);
}



//Opgave 6 -  Dice Rolling Championship
//Level 1 - Player Setup

//Here I use prompt to get player names - player 1 and player 2.
const player1 = prompt ("Enter player 1´s name:");
const player2 = prompt ("Enter player 2´s name:");

//Log both names to the console to confirm
console.log("player1:",player1);
console.log("player2:",player2);



//Level 2 - Single Round
// Here I write a function that chooses a number between 1 and 6.
function rollDice(){
    // Math.random is used to find a random number between 1 and 6.
    return Math.floor(Math.random()*6)+1;
}

// Now we use the prompt function because it lets the user press Enter, like in a game.
prompt(`${player1}, press Enter to roll...`);

// Now we log the results so the dice are rolled and a random number is chosen for player 1 and player 2.
//1.roll:
const player1Roll = rollDice();
console.log(`${player1} rolled: ${player1Roll}`);

//2.roll:
const player2Roll = rollDice();
console.log(`${player2} rolled: ${player2Roll}`);



// Level 3 - Track Scores
// We have two variables
let total1 = 0, total2 = 0;


// To play 10 rounds, we use a loop that runs 10 times.
for (let i = 1; i <= 10; i++) {
    console.log(`Round ${i}`);

    //random number between 1 and 6
    prompt(`${player1}, press Enter to roll`);
    const roll1 = rollDice();

    //random number between 1 and 6
    prompt(`${player2}, press Enter to roll`);
    const roll2 = rollDice();


    //Each roll is added to their total score
    total1 += roll1;
    total2 += roll2;


    // Show the roll and total score after the round
    console.log(`${player1} roll ${roll1} (total: ${total1})`);
    console.log(`${player2} roll ${roll2} (total: ${total2})`);
}

// When all 10 rounds are finished, show the final result
console.log(`\nfinalresult: ${player1} = ${total1}, ${player2} = ${total2}`);

//then I check who has the higher score
console.log(`\nfinalresult: ${player1} = ${total1}, ${player2} = ${total2}`);
console.log(total1 > total2 ? `${player1} = won!`:total2 > total1 ? `${player2} won! `: "a tie");



// Level 4 - Complete Game (10 Rounds)
// I first ask for both players' names
// I use _1 because I used other names earlier.

const player1_1 = prompt("Enter Player 1's name:");
const player2_1 = prompt("Enter Player 2's name:");

// Then I log it - taken from the example
console.log("Welcome to the Dice Rolling Championship");
console.log("player 1:", player1_1);
console.log("player 2:", player2_1);

//This function generates a random number between 1 and 6.
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

//Both players begin with 0 points.
let total1_1 = 0;
let total2_1 = 0;

// For loop to run 10 rounds - got help from a student
for (let round = 1; round <= 10; round++) {
    console.log(`Round ${round}:`);

    // Both players roll and receive a number from 1–6.
    for (let player of [player1_1, player2_1]) {
        prompt(`${player}, press Enter to roll...`);
        const roll = rollDice();

        // This means the points are added to the correct player's total – if it's player 1, otherwise it's player 2
        if (player === player1_1) {
            total1_1 += roll;
            // This shows the correct total for the player who rolled
            console.log(`${player} roll: ${roll} (Total: ${total1_1})`);
        } else {
            total2_1 += roll;
            // This shows the correct total for the player who rolled
            console.log(`${player} roll: ${roll} (Total: ${total2_1})`);
        }
    }
}

// This is after all 10 rounds – it shows the final result because we log it out
console.log("Final scores:");
console.log(`${player1_1}: ${total1_1}`);
console.log(`${player2_1}: ${total2_1}`);

// Here I check who has the most points or if it's a tie - got help from a student
if (total1_1 > total2_1) {
    console.log(`${player1_1} wins!`);
} else if (total2_1 > total1_1) {
    console.log(`${player2_1} wins!`);
} else {
    console.log("it´s a tie");
}
