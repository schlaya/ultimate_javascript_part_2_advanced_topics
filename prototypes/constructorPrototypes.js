Object.getPrototypeOf(myObj);

// myObj.__proto__ (parent of myObj)
// the one above and below are the same
// Constructor.prototype

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype;

const circle = new Circle(1);
