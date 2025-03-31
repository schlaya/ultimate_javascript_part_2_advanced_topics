function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    };
}

// with the call method we can call a function
// at first we will have to pass an empty object, then
// the "this" will reference onto it
// the 1 is the argument we want to pass
Circle.call({}, 1);
// is the same as call but arguments will be passed in an array
Circle.apply({}, [1, 2, 3]);

// does the same as call
const another = new Circle(1);
