/*
 * Motivation: specify the kinds of objects to create using prototypical instance,
 * and create new object by copying this prototype
 */

const scoutPrototype = require('./scoutPrototype');

const alex = scoutPrototype.clone();
alex.name = 'Alex Banks';
alex.addItemToList('slingshot');

const eve = scoutPrototype.clone();
eve.name = 'Eve Porcello';
eve.addItemToList('reading light');

console.log(`${alex.name}: ${alex.shoppingList}`);
console.log(`${eve.name}: ${eve.shoppingList}`);
