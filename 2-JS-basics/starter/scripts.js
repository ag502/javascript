/*****************************
* Functions
*/

/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/*****************************
* Function Statements and Expressions
*/

/*
// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function Expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'dirver':
            return firstName + ' dirves a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/*****************************
* Arrays
*/

/*
// Initialize new Array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

// Mutate array data
names[1] = 'Ben'
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.')
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));
console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is Not a designer' : 'John is a designer';

console.log(isDesigner);
*/

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/

/*
function calculateTip(bill) {
    var tip = -1;
    if (bill < 50) {
        tip = bill * 0.2;
    } else if (bill >= 50 && bill <= 200) {
        tip = bill * 0.15;
    } else if (bill > 200) {
        tip = bill * 0.1;
    }
    return tip;
}

var allThreeTips = [calculateTip(124), calculateTip(48), calculateTip(268)];
var finalPaidAmounts = [124 + allThreeTips[0], 48 + allThreeTips[1], 268 + allThreeTips[2]];

console.log('Tips: ', allThreeTips, 'Total Paid: ', finalPaidAmounts);
*/

/*****************************
* Objects and properties
*/

/*
// Objerct literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/*****************************
* Objects and methods
*/

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2020 - this.birthYear; //john.birthYear
    }
};

// john.age = john.calcAge();
john.calcAge();
console.log(john);
*/

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/

/*
var mark = {
    firstName: 'Mark',
    lastName: 'Smith',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = this.mass / this.height * this.height;
        return this.BMI;
    }
}

var john = {
    firstName: 'John',
    lasName: 'Story',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.BMI = this.mass / this.height * this.height;
        return this.BMI;
    }
}

console.log(mark.calcBMI() > john.calcBMI() ? "Mark's BMI is greater than John's BMI" : (mark.BMI < john.BMI ? "John's BMI is greater than Mark's BMI" : 'They are Same'));
*/

/*****************************
* Loops and iteration
*/

/*
var john = ['John', 'Smith', 1990, 'designer', false];


for (var i = 0; i < 20; i += 2) {
    console.log(i);
}

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}


// continue and break statement
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') {
        continue;
    }
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') {
        break;
    }
    console.log(john[i]);
}
*/

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/

var john = {
    fullName: 'John Smith',
    bills : [124, 48, 268, 180, 42],
    calcTip: function() {
        var tips = [];
        var finalPaidAmounts = [];
        for (var i =0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                tips.push(this.bills[i] * 0.2);
            } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
                tips.push(this.bills[i] * 0.15);
            } else if (this.bills[i] > 200) {
                tips.push(this.bills[i] * 0.1);
            }
            finalPaidAmounts.push(this.bills[i] + tips[i]);
        }
        this.tips = tips;
        this.finalPaidAmounts = finalPaidAmounts;
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 375, 110, 45],
    calcTip: function() {
        var tips = [];
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                tips[i] = this.bills[i] * 0.2;
            } else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
                tips[i] = this.bills[i] * 0.1;
            } else if (this.bills[i] >= 300) {
                tips[i] = this.bills[i] * 0.25;
            }
        }
    }
}

john.calcTip();
console.log(john);