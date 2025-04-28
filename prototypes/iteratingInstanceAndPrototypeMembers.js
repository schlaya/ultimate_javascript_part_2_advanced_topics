function Circle(radius) {
    // Instance members
    this.radius = radius;

    // we can easily reference instance members in our prototypes
    // we can also refernce prototypes in our instance members
    this.move = function () {
        console.log("move");
    };
}

const c1 = new Circle(1);

// Prototype members
// it doesn't matter at what time you change a prototype
Circle.prototype.draw = function () {
    console.log("draw");
};

// will only return instance members
console.log(Object.keys(c1));

// returns all members instance and prototypes
for (let key in c1) console.log(key);
