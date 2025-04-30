function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log("duplicate");
};

// Is a Constructor
function Circle(radius, color) {
    // now this.color will be calling the right thing
    Shape.call(this, color);

    this.radius = radius;
}

// Circle now inherits from square
extend(Circle, Shape);

function extend(Child, Parent) {
    // This allows us to inherit elements of Shape in Circle
    // Child.prototype now inherits from Shape.prototype
    Child.protoype = Object.create(Parent.prototype);

    // Reset the Constructor of Circle
    Child.prototype.constructor = Child;
}

Circle.prototype.draw = function () {
    console.log("draw");
};

function Square(size) {
    this.size = size;
}

extend(Square, Shape);

const s = new Shape();
const c = new Circle(1);
