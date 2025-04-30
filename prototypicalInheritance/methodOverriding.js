function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
    console.log("duplicate");
};

function Circle() {}

// circle now inherits from shape
extend(Circle, Shape);

// this redefines circle.duplicate and now does not inherit it from the parent
// !!! Important that it comes after the inheritance above
Circle.prototype.duplicate = function () {
    console.log("duplicate circle");
};

const c = new Circle();
