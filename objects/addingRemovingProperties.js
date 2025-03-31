function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    };
}

const circle = new Circle(10);

// Add Properties
circle.location = { x: 1 };

const propertyName = "location";
circle[propertyName] = { x: 1 };

// Delete Properties
delete circle.location;
delete circle["location"];
