function Circle(radius) {
    this.radius = radius;

    this.draw = function () {
        console.log("draw");
    };
}
// Objects created by a given 
// constructor will have the same prototype
const circle = new Circle(10);
