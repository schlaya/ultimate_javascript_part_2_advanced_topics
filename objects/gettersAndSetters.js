function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    // this allows us to access the location
    // without being able to change or modify it
    this.getDefaultLocation = function () {
        return defaultLocation;
    };

    this.draw = function () {
        console.log("draw");
    };
    // 1 Argument: the object that is referenced,
    // 2 Argument: name of Our Property,
    // 3 Argument: Object, with special keyword get that returns a function
    Object.defineProperty(this, "defaultLocation", {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y) throw new Error("Invalid location.");

            defaultLocation = value;
        },
    });
}

const circle = new Circle(10);
// will return a error on purpose
circle.defaultLocation = null;
circle.draw();
