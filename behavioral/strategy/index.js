/*
 * Motivation: define a family of algorithms, encapsulate each one, and make them
 * interchangeable. Strategy lets the algorithm vary independently from clients that use it.
 */

const logger = require('./Logger');

logger.log('Hello World');
logger.log('Hi World');

logger.changeStrategy('none');

logger.log('Hello World');
logger.log('Hi World');
