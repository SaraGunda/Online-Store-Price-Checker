// 2. Use prompt() to ask a few questions:

    // Enter the name of the item:
let item = window.prompt("Enter the name of the item:");
console.log(item);

    // What is the base price of the item?
let base = window.prompt("Enter the base price of the item:");
console.log(base);

    // Is today "Black Friday"? Answer yes or no.
let blackFriday = window.prompt('Is today "Black Friday"?', "Answer yes or no.");
console.log(blackFriday);

let baseNumber = Number(`${base}`);


// If the answer is "yes" reduce the price by 25% and add this string to the message that will be displayed at the end: "Since it's Black Friday, we will reduce the price by 25%. "

// If the answer is "no" don't change the price at all and add this string to the message that will be displayed at the end: "It's not Black Friday, so the price didn't change for that. "

if (blackFriday == "yes") {
    console.log(`Since it's Black Friday, we will reduce the price by 25%.`);
} else {
    console.log("It's not Black Friday, so the price didn't change for that.");
};


// Did the purchaser find the product through a search engine? Answer yes or no.
let searchEngine = window.prompt("Did the purchaser find the product through a search engine?", "Answer yes or no.");
console.log(searchEngine);

// If the answer is "yes" increase the price by 1% and add this string to the message that will be displayed at the end: "We will increase the price by 1% to pay the search engine. "
// If the answer is "no" don't change the price at all and add this string to the message that will be displayed at the end: "The customer didn't use a search engine, so the price didn't change for that. "


if (searchEngine == "yes") {
    console.log(`We will increase the price by 1% to pay the search engine. `);
} else {
    console.log("The customer didn't use a search engine, so the price didn't change for that.");
};



// Did the purchaser visit a comparison-shopping site? Answer yes or no.

let comparison = window.prompt("Did the purchaser visit a comparison-shopping site?", "Answer yes or no.");
console.log(comparison);


// If the answer is "yes" reduce the price by 10% and add this string to the message that will be displayed at the end: "Since the customer visited a comparison-shopping site, we will reduce the price by 10%. "
// If the answer is "no" don't change the price at all and add this string to the message that will be displayed at the end: "The customer didn't visit a comparison-shopping site, so the price didn't change for that. "


if (comparison == "yes") {
    console.log(`Since the customer visited a comparison-shopping site, we will reduce the price by 10%.`);
} else {
    console.log("The customer didn't visit a comparison-shopping site, so the price didn't change for that.");
};


if (blackFriday == "yes" && searchEngine == "yes" && comparison == "yes") {
    console.log (`Your price: ${baseNumber*0.75*1.1*0.9}`)
} else if (blackFriday == "no" && searchEngine == "yes" && comparison == "yes") {
    console.log (`Your price: ${baseNumber*1.1*0.9}`);
} else if (blackFriday == "yes" && searchEngine == "no" && comparison == "yes") {
    console.log (`Your price: ${baseNumber*0.75*0.9}`);
} else if (blackFriday == "no" && searchEngine == "no" && comparison == "yes") {
    console.log (`Your price: ${baseNumber*0.9}`);
} else if (blackFriday == "no" && searchEngine == "no" && comparison == "no") {
    console.log (`Your price: ${baseNumber}`);
} else if (blackFriday == "yes" && searchEngine == "yes" && comparison == "no") {
    console.log (`Your price: ${baseNumber*0.75*1.1}`)
} else if (blackFriday == "yes" && searchEngine == "no" && comparison == "no") {
        console.log (`Your price: ${baseNumber*0.75*1.1*0.9}`)
} else if (blackFriday == "no" && searchEngine =="yes" && comparison =="no") {
        console.log (`Your price: ${baseNumber*1.1}`)
} else {
        alert ("Invalid responses. Refresh the page and try again")
};

// Note:Not sure how to add .toFixed ^