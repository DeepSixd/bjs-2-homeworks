class AlarmClock {
    constructor() {
        this.alarmCollection = [],
        this.timerId = null;
    }
    addClock(time, actionCallback, id) {
        if(!id) throw new Error('Ошибка, параметр не передан'); // проверка передан id или нет
        
        if(this.alarmCollection.some(elem => elem.id == id)) { // пров. наличия элемента в массиве
            console.error(`Ошибка, параметр с id ${id} уже существует`);
            return;
        }
        
        this.alarmCollection.push({time, actionCallback, id});
    }

    removeClock(id) {
        if(this.alarmCollection.some(elem => elem.id == id)) {
            this.alarmCollection.filter(() => {
                this.alarmCollection.pop()
            });
            return true;
        } else {
            return false;
        }
    }

    getCurrentFormattedTime() {
        let date = new Date;
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if(hours < 10) {
          hours = '0' + hours;
        }
        if(minutes < 10) {
          minutes = '0' + minutes;
        }
        return 'h:m'.replace('h', hours).replace('m', minutes);
    }

    // start() { костыльный вариант с переопределением this
    //     let _this = this;
    //     function checkClock(elem) {
    //         if (elem.time == _this.getCurrentFormattedTime()) {
    //             elem.actionCallback();
    //         }
    //     }
    //     if (this.timerId == null) {
    //         this.timerId = setInterval(function() {
    //             _this.alarmCollection.forEach(elem => {
    //                 checkClock(elem);            // для каждого elem массива alarmCollection вызывается checkClock раз в секунду
    //             })
    //         }, 1000);
            
    //     }

    // }
    
    start() {
        if (this.timerId == null) {
            this.timerId = setInterval(this.checkClocks.bind(this), 1000);
        };
    };

    checkClock(elem) {
        if (elem.time == this.getCurrentFormattedTime()) {
            elem.actionCallback();
        };
    };
    
    checkClocks() {
        this.alarmCollection.forEach(elem => {
            this.checkClock(elem);
        });
    };

    stop() {
        if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        } 
    }

    printAlarms() {
        this.alarmCollection.forEach(elem => {
            console.log(`Будильник ${elem.id} заведен на ${elem.time}`)
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}



let alarmClock = new AlarmClock();


alarmClock.addClock("21:49", () => console.log("Wake up"), 1);
alarmClock.addClock("21:50", () => console.log("Wake up, Neo"), 2);

