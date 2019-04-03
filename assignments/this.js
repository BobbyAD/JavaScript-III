/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. this references the object it's contained in, so if you use it globally or in a function that's not in an object, it'll reference the console/window.
* 2. Inside an object, it references the object it's in. You can use it to reference elements inside the object.
* 3. When used with a constructor, it'll reference the created object after the keyword new is used to make them.
* 4. You can use .apply() and .call() to override the object this points to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const myObj = {
    name: 'George',
    favFood: 'Bananas',
    greeting: function() {
        //this references the object it's inside of.
        console.log(`Oy bruv, I'm ${this.name} and I like ${this.favFood}`);
    }
}
myObj.greeting();

// Principle 3

// code example for New Binding

function NewObj(attr) {
    this.name = attr.name,
    this.favFood = attr.favFood,
    this.greeting = function() {
        //this references the new objects I'm going to create
        console.log(`Oy bruv, I'm ${this.name} and I like ${this.favFood}`);
    }
}

const jerry = new NewObj({
    name: 'Jerry',
    favFood: 'Cheese'
})
const scooby = new NewObj({
    name: 'Scooby-Doo',
    favFood: 'Scooby-Snacks'
})

jerry.greeting();
scooby.greeting();

// Principle 4

// code example for Explicit Binding

jerry.greeting.apply(scooby);
scooby.greeting.call(jerry);