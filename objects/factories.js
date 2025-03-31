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

// now we have a factory that can create 
// circles other than a single object, that we have 
// to repeatedly copy and paste