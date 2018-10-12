/*
 * Motivation: ensure a class only has one instance, and provide a global point of access to it.
 *
 * Note: no need to create private constructor and static getInstance method,
 * in node.js we can simplify implementation and export one instance
 *
 * Disadvantage of this implementation:
 * we can force built-in require method to download the same module several times.
 * Thus getting new logger instance each time, e.g.:
 * file1:
 * const logger = require('./Logger');
 *
 * file2:
 * delete require.cache['full path to Logger.js'];
 * const logger = require('./Logger');
 */

class Logger {

    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }
}

module.exports = new Logger();
