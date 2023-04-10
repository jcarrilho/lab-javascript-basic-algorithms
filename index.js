console.log ("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = 'Joao';
console.log(`The driver's name is ${hacker1}!`);

let hacker2 = 'Victoria';
console.log(`The navigator's name is ${hacker2}!`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

//3.1 

const hacker1InCaps = hacker1.toUpperCase();  

function addSpaces(hacker1InCaps) {
    let result = ``;      

for (const char of hacker1InCaps) {  
    result += char +  ` `;     
}     

return result.trimEnd();
}

console.log(addSpaces(hacker1InCaps))   

//reverse 

let reversedHacker1 = "";  
for (let i = hacker1.length - 1; i >= 0; i--) {     
const char = hacker1[i];     
reversedHacker1 += char; } 
console.log(reversedHacker1);
//3.3

let lexicoOrder = hacker1.localeCompare(hacker2)

if (lexicoOrder = -1) {
    console.log(`The driver's name goes first.`);

  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }
