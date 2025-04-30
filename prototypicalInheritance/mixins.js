function mixin(target, ...sources) {
    Object.assign(target.protoype, ...sources);
}

const canEat = {
    eat: function () {
        this.hunger--;
        console.log("eating");
    },
};

const canWalk = {
    walk: function () {
        console.log("walking");
    },
};

function Person() {}

// First param is the target, the other things are the sources
mixin(Person, canEat, canWalk);

const person = new Person();

console.log(person);

function Goldfish() {}

mixin(Goldfish, canEat, canSwim);

const goldfish = new Goldfish();
console.log(goldfish);
