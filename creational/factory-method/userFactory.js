/*
 * Motivation: define an interface for creating an object, but let subclasses
 * decide which class to instantiate. Factory Method lets a class defer instantiation
 * to subclasses.
 */

const Employee = require('./Employee');
const Shopper = require('./Shopper');

const userFactory = (name, money = 0, type, employer) => {
    if (type === 'employee') {
        return new Employee(name, money, employer);
    }

    return new Shopper(name, money);
};

module.exports = userFactory;
