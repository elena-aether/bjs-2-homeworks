let a = 100;
class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.type = null;
        this.state = 100;
    }

    fix() {
        return this.state = Math.floor(this.state * 1.5)
        }
    
    set state(arg) {
        console.log("set" + arg)
        if (arg <= 0) {
            this._state = 0
        } else if (arg >= 100) {
            this._state = 100
        } else {
            this._state = arg
        } 
        }

    get state() {
        console.log("get" + this._state)
      return this._state
    }
}

class Magazine extends PrintEditionItem {
    constructor (...args) {
        super (...args);
        this.type = "magazine";
    }
}


class Book extends PrintEditionItem {
    constructor (author, ...args) {
        super (...args);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor (...args) {
        super (...args);
        this.type = "novel";
    }
}

class DetectiveBook extends Book {
    constructor (...args) {
        super (...args);
        this.type = "detective";
    }
}

class FantasticBook extends Book {
    constructor (...args) {
        super (...args);
        this.type = "fantastic";
    }
}

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
        this.books.push(book)
        }
    }

    findBookBy(type, value) {
        const item = this.books.find(book => book[type] === value);
        if (item) {
                return item
        } else {
                return null
        }
    }
       

    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName);
        console.log(index)
        if (index != -1) {
            const a = this.books[index];
            this.books.splice(index, 1)
           return a
        } else {
            return null
        }
        }
       
    }