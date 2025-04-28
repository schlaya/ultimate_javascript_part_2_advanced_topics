let person = { name: "Liam" };

// second argument is the name of the targeted property
// third argument is where we add the attributes to the property
Object.defineProperty(person, "name", {
    writable: false,
    enumerable: true,
    configurable: false,
});
//let objectBase = Object.getPrototypeOf(person);
//let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
//console.log(descriptor);

delete person.name;

// the name is still there because we defined the
// property so that it can't be configured
console.log(person.name);
