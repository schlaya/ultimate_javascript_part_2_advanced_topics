function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    };
}

const circle = new Circle(10);

// let ... in ...
// is used for iterating trough objects
for (let key in circle) {
    if (typeof circle[key] !== "function")
        // circle[key] is here to display the value of the item
        console.log(key, circle[key]);
}

// approach to get all the keys in an object
const keys = Object.keys(circle);
console.log(keys);

// in checks if "radius" is part of circle
if ("radius" in circle) console.log("Circle has a radius.");
