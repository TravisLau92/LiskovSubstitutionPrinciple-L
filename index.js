// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

//Before Liskov Substitution Principle
// Base class: User

class User {
  login() {
    console.log('User logged in');
  }
}

class Admin extends User {
  editDatabase() {
    console.log('Admin edited the database');
  }

  // Admin inherits both login and editDatabase methods
}

class RegularUser extends User {
  // RegularUser do not have theeditDatabase methods
}

// Usage
const admin = new Admin();
admin.login(); // User logged in
admin.editDatabase(); // User edited the post (intended behavior)



// Good Example: Following Liskov Substitution Principle
class Vehicle {
  startEngine() {
    throw new Error("Method 'startEngine()' must be implemented.");
  }
}

class Car extends Vehicle {
  startEngine() {
  console.log("Car engine started");
  }
}

// Usage
const car = new Car();
car.startEngine(); // "Car engine started"

// If bicycles do not have engines, they should not extend vehicle
class Bicycle {
  pedal() {
    console.log("Pedaling the bicycle");
  }
}

// Usage
const bicycle = new Bicycle();
bicycle.pedal(); // "Pedaling the bicycle"