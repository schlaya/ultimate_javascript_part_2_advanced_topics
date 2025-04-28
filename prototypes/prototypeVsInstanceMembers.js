function Circle(radius) {
    // Instance members
    this.radius = radius;

    // we can easily reference instance members in our prototypes
    // we can also refernce prototypes in our instance members
    this.move = function () {
        this.draw();
        console.log("move");
    };
}

// Prototype members
Circle.prototype.draw = function () {
    console.log("draw");
};

const c1 = new Circle(1);
const c2 = new Circle(1);

Circle.prototype.toString = function () {
    return "Circle with radius " + this.radius;
};

// JS at first looks at the circle object and then it looks at the prototypes
