function Circle(radius) {
    // is only a local variable inside this function
    let color = "red";

    this.radius = radius;
    // "let" now makes it only local => private
    let defaultLocation = { x: 0, y: 0 };

    let computeOptimumLocation = function (factor) {
        // ...
    };

    this.draw = function () {
        // now we will have to access it like this
        // because now it is private
        computeOptimumLocation(0.1);
        // defaultLocatin
        // this.radius

        console.log("draw");
    };
}

const circle = new Circle(10);
circle.draw();
