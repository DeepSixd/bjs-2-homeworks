class PrintEditionItem {
    constructor(...arghs) {
        [this.name, this.releaseDate, this.pagesCount] = arghs;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this._state*1.5;
    }

    set state(arg) {
        if (arg < 0) {
            return this._state = 0;
        } else if (arg > 100) {
            return this._state = 100;
        } else {
            return this._state = arg;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(...arghs) {
        super(...arghs);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(author,...arghs) {
       super(...arghs);
       this.author = author;
       this.type = "book"; 
    }
}
class NovelBook extends Book {
    constructor(...arghs) {
        super(...arghs);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(...arghs) {
        super(...arghs);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(...arghs) {
        super(...arghs);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        let book = this.books.find(item => item[type] == value)
        if (book == undefined) {
            return null;
        } else {
            return book;
        }
    }
    giveBookByName(bookName) {
        let book = this.books.find(item => item.name == bookName);
        if (book == undefined) {
            return null;
        } else {
            this.books.splice(book, 1);
            return book;
        }
    }
}

const libraryShow = new Library("Библиотека имени Ленина");

libraryShow.addBook(
    new DetectiveBook(
      "Артур Конан Дойл",
      "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
      2019,
      1008
    )
);

let picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
let curious = new NovelBook("Стефан Цвейг", "Случай на Женевском озере", 1919, 160);

libraryShow.addBook(picknick);
libraryShow.addBook(curious);
// console.log(curious.releaseDate);
// console.log(curious.state);
// console.log(curious.author);
// curious.state = 40; //60
// curious.fix();
// console.log(curious.state);

// libraryShow.findBookBy("name","Случай на Женевском озере");
// console.log("Количество книг до выдачи: " + libraryShow.books.length); //Количество книг до выдачи: 4
// libraryShow.giveBookByName("Пикник на обочине");
// console.log("Количество книг после выдачи: " + libraryShow.books.length); 
// console.log(libraryShow);

// picknick.state = 60;
// picknick.fix();
// console.log(picknick.state);

// libraryShow.addBook(picknick);
// console.log("Количество книг после изъятия: " + libraryShow.books.length);
// console.log(libraryShow);


//                                             Задание #3

class Student {
    constructor(...args) {
        [this.name, this.gender, this.age] = args;
        this.marks = {};
        this.excluded;
    }

    addMark (mark, subjectName) {
        if (mark < 6 && mark > 0) {
             if  (this.marks[subjectName] === undefined ) {
              this.marks[subjectName] = [];
              this.marks[subjectName].push(mark);
            } else {
              this.marks[subjectName].push(mark);
            }   
        } else {
            console.log("Ошибка, оценка должна быть числом от 1 до 5"); 
        }   
    }
      
      getAverageBySubject (subjectName) {
        let sum = 0;
        for (let i = 0; i < this.marks[subjectName].length; i++) {
          sum += this.marks[subjectName][i];
        }
        let avg = sum / this.marks[subjectName].length; // как это еще можно сделать? подскажешь? есть идеи?
        return avg;
      }

    getAverage () {
        let sum = 0;
        let marksCount = 0;
        for (let subjectName in this.marks) {
            marksCount += this.marks[subjectName].length;
            for (let i = 0; i < this.marks[subjectName].length; i++) {
            sum += this.marks[subjectName][i];
            }
        }
        let avg = sum / marksCount;
        return avg;
    }
      
    exclude (reason) {
        delete this.marks;
        delete this.subject;  
        
        this.excluded = reason;
    };
}
