/*
 * Motivation: separate the constuction of a complex object from its representation so that the same
 * construction process can create different representations.
 */
const Person = require('./Person');

class PersonBuilder {

    constructor(name) {
        this.name = name;
    }

    makeEmployee() {
        this.isEmployee = true;
        return this;
    }

    makeManager(hours = 40) {
        this.isManager = true;
        this.hours = hours;
        return this;
    }

    makePartTime(hours = 20) {
        this.hours = hours;
        return this;
    }

    withMoney(money) {
        this.money = money;
        return this;
    }

    withList(list = []) {
        this.shoppingList = list;
        return this;
    }

    build() {
        return new Person(this);
    }
}

module.exports = PersonBuilder;
