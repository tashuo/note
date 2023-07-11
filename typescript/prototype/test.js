var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Thing = /** @class */ (function () {
    function Thing() {
        this.born = function () {
            console.log("time to born");
        };
    }
    Thing.prototype.die = function () {
        console.log("time to die");
    };
    return Thing;
}());
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal(name) {
        if (name === void 0) { name = "dog"; }
        var _this = _super.call(this) || this;
        _this.eat = function () {
            console.log("eat");
        };
        _this.name = name;
        return _this;
    }
    Animal.prototype.say = function () {
        console.log("Hi, i'm ".concat(this.name));
    };
    return Animal;
}(Thing));
var cat = new Animal("cat");
var dog = new Thing();
// instance
console.log(cat);
console.log(dog);
console.log(Animal);
console.log(Animal.toString());
console.log(Animal.prototype);
console.log(Thing);
console.log(Thing.prototype);
console.log(Object.getPrototypeOf(Thing.prototype));
console.log(Object.getPrototypeOf(Thing));
console.log(Object.getPrototypeOf(Thing) === Function.prototype);
console.log(Object.getPrototypeOf(Function));
console.log(Object.getPrototypeOf(Object));
console.log(Object.getPrototypeOf(Object.prototype));
console.log(Object.getPrototypeOf(Object.prototype.constructor) === Object);
console.log(Object.getPrototypeOf({}));
console.log("------------\n\n");
// prototype
console.log(Object.getPrototypeOf(cat));
console.log(Animal.prototype);
console.log(Object.getPrototypeOf(Animal.prototype));
console.log(Animal);
console.log(Object.getPrototypeOf(dog));
console.log(Thing.prototype);
console.log(Object.getPrototypeOf(Thing.prototype));
console.log(Thing);
console.log(cat.constructor === Animal);
console.log(Object.getPrototypeOf(cat).constructor === Animal);
console.log(Animal.prototype.constructor === Animal);
console.log(Object.getOwnPropertyNames(cat));
console.log(Object.getOwnPropertyNames(cat.constructor));
console.log(Object.getOwnPropertyNames(Animal.prototype));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(cat)));
console.log(Object.getPrototypeOf(cat));
console.log(Object.getPrototypeOf(dog));
console.log(Object.getPrototypeOf(Animal));
console.log(Object.getPrototypeOf(Animal.prototype));
