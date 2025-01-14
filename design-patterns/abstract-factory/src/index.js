"use strict";
// src/index.ts
// const greet = (name: string): string => {
// return `Hello, ${name}!`;
// };
// 
// console.log(greet("World"));
// 
/**
 * Concrete Factories produce a family of products that belong to a single
 * variant. The factory guarantees that resulting products are compatible. Note
 * that signatures of the Concrete Factory's methods return an abstract product,
 * while inside the method a concrete product is instantiated.
 */
class ConcreteFactory1 {
    createProductA() {
        return new ConcreteProductA1();
    }
    createProductB() {
        return new ConcreteProductB1();
    }
}
/**
 * Each Concrete Factory has a corresponding product variant.
 */
class ConcreteFactory2 {
    createProductA() {
        return new ConcreteProductA2();
    }
    createProductB() {
        return new ConcreteProductB2();
    }
}
/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
class ConcreteProductA1 {
    usefulFunctionA() {
        return 'The result of the product A1.';
    }
}
class ConcreteProductA2 {
    usefulFunctionA() {
        return 'The result of the product A2.';
    }
}
/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
class ConcreteProductB1 {
    usefulFunctionB() {
        return 'The result of the product B1.';
    }
    /**
     * The variant, Product B1, is only able to work correctly with the variant,
     * Product A1. Nevertheless, it accepts any instance of AbstractProductA as
     * an argument.
     */
    anotherUsefulFunctionB(collaborator) {
        const result = collaborator.usefulFunctionA();
        return `The result of the B1 collaborating with the (${result})`;
    }
}
class ConcreteProductB2 {
    usefulFunctionB() {
        return 'The result of the product B2.';
    }
    /**
     * The variant, Product B2, is only able to work correctly with the variant,
     * Product A2. Nevertheless, it accepts any instance of AbstractProductA as
     * an argument.
     */
    anotherUsefulFunctionB(collaborator) {
        const result = collaborator.usefulFunctionA();
        return `The result of the B2 collaborating with the (${result})`;
    }
}
/**
 * The client code works with factories and products only through abstract
 * types: AbstractFactory and AbstractProduct. This lets you pass any factory or
 * product subclass to the client code without breaking it.
 */
function clientCode(factory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}
