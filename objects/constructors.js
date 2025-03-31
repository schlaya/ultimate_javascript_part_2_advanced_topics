// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log("draw");
        },
    };
}

const cirlce = createCircle(1);

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }
}

// new Operator creates an empty object.
// "this" will then point to the object
const another = new Circle(1);
