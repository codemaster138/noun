function arrowString(text, start, end) {
    rtn = text;
    rtn += "\n";
    rtn += " ".repeat(start) + "^".repeat(end - start + 1);
    return rtn
}

class Error {
    constructor(type, details, pos_start, pos_end) {
        this.pos_start = pos_start;
        this.pos_end = pos_end;
        this.type = type;
        this.details = details;
    }

    toString() {
        let estr = `\x1b[31;1m${this.type}\x1b[0m: ${this.details}\nFile \'${this.pos_start.fn}\', line ${this.pos_start.ln + 1}\n`;
        estr += arrowString(this.pos_start.text, this.pos_start.col, this.pos_end.col);
        return estr;
    }
}

class InvalidCharError extends Error {
    constructor(details, pos_start) {
        super("Invalid character", details, pos_start, pos_start);
    }
}

module.exports = {
    InvalidCharError
}