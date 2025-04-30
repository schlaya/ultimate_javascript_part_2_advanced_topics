//function extend(Child, Parent) {
//    Child.prototype = Object.create(Parent.prototype);
//    Child.prototype.constructor = Child;
//}
//
//function HtmlElement() {}
//
//HtmlElement.prototype.click = function () {
//    console.log("clicked");
//};
//
//HtmlElement.prototype.focus = function () {
//    console.log("focused");
//};
//
//extend(HTMLSelectElement, HtmlElement);
//
//function HTMLSelectElement(items) {
//    this.items = items;
//}
//
//HTMLSelectElement.prototype.addItem = function (items) {
//    items += 1;
//};
//
//HTMLSelectElement.prototype.removeItem = function (items) {
//    items -= 1;
//};
//
//HTMLSelectElement.prototype.items = function (items) {
//    console.log(items);
//};
//
//const e = new HtmlElement();
//
//console.log(e.click);
//
//console.log(HTMLSelectElement.items());


// This is Mosh's approach, mine does not work / is incorrect
function HtmlElement() {
    this.click = function () {
        console.log("clicked");
    };
}

HtmlElement.prototype.focus = function () {
    console.log("focused");
};

function HTMLSelectElement(items = []) {
    this.items = items;

    this.addItem = function (item) {
        this.items.push(item);
    };

    this.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
}

HTMLSelectElement.prototype = new HtmlElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;
