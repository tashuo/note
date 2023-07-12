class Thing {
  born = () => {
    console.log("time to born");
  };

  die() {
    console.log("time to die");
  }
}

class Animal extends Thing {
  type: string;
  constructor(type = "dog") {
    super();
    this.type = type;
  }

  eat = () => {
    console.log("eat");
  };

  say() {
    console.log(`Hi, i'm ${this.type}`);
  }
}

const cat = new Animal("cat");
const dog = new Thing();

// prototype
/**
 * Animal {
  born: [Function (anonymous)],
  eat: [Function (anonymous)],
  name: 'cat'
}
 */
console.log(cat); // Animal构造函数实例化的对象， 继承了Animal(包括Animal继承Thing的)所有的属性

// Thing { constructor: [Function: Animal], say: [Function (anonymous)] }
console.log(Object.getPrototypeOf(cat));

// Thing { born: [Function (anonymous)] }
console.log(dog);

// { die: [Function (anonymous)] }
console.log(Object.getPrototypeOf(dog));

// [Function: Animal]
console.log(Animal);

// Thing { constructor: [Function: Animal], say: [Function (anonymous)] }
console.log(Animal.prototype);

// [Function: Thing]
console.log(Object.getPrototypeOf(Animal)); // Thing

console.log(Object.getPrototypeOf(Animal) === Thing); // true

// { die: [Function (anonymous)] }
console.log(Object.getPrototypeOf(Animal.prototype));

console.log(Object.getPrototypeOf(Animal.prototype) === Thing.prototype);

// [Function: Thing]
console.log(Thing);

// { die: [Function (anonymous)] }
console.log(Thing.prototype);

// {}
console.log(Object.getPrototypeOf(Thing));

// [Object: null prototype] {}
console.log(Object.getPrototypeOf(Thing.prototype));

// true
console.log(Object.getPrototypeOf(Thing.prototype) === Object.prototype);

// true
console.log(Object.getPrototypeOf(Thing) === Function.prototype);

// {}
console.log(Object.getPrototypeOf(Function));

// true
console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);

// {}
console.log(Object.getPrototypeOf(Object));

// null
console.log(Object.getPrototypeOf(Object.prototype));

// true
console.log(Object.prototype.constructor === Object);

// [Object: null prototype] {}
console.log(Object.getPrototypeOf({}));

// property names
// [ 'born', 'eat', 'type' ]
console.log(Object.getOwnPropertyNames(cat));

// Animal.prototype.constructor = Animal
// [ 'length', 'name', 'arguments', 'caller', 'prototype' ], 继承了Function对象的属性
console.log(Object.getOwnPropertyNames(Animal));

// [ 'constructor', 'say' ]
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(cat)));

// [ 'born' ]
console.log(Object.getOwnPropertyNames(dog));

// [ 'length', 'name', 'arguments', 'caller', 'prototype' ]
console.log(Object.getOwnPropertyNames(Thing));

// [ 'constructor', 'die' ]
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(dog)));
