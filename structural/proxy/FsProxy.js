/*
 * Motivation: provide a surrogate or placeholder for another object to control access to it.
 */

class FsProxy {

    constructor(fsSubject) {
        this.fs = fsSubject;
    }

    readFile(path, format, callback) {

        // TODO: ignore case
        if (!path.match(/.md$|.MD$/)) {
            return callback(new Error('Can only read Markdown files.'));
        }

        this.fs.readFile(path, format, (error, contents) => {

            if (error) {
                console.error(error);
                return callback(error);
            }

            return callback(null, contents);
        });
    }
}

module.exports = FsProxy;
