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
            this.alarmCollection.splice(
                () => {
                    this.alarmCollection.findIndex()
                },1);
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

    
    start() {
        let _checkClock = checkClock.bind(this);
        function checkClock(elem) {
            if (elem.time == this.getCurrentFormattedTime()) { 
                elem.actionCallback();
            }
        }

        if (this.timerId == null) {
            this.timerId = setInterval(
               () => this.alarmCollection.forEach(elem => _checkClock(elem)), 1000);
        };
        
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


alarmClock.addClock("22:59", () => console.log("Wake up"), 1);
alarmClock.addClock("23:00", () => { console.log("Wake up, Neo"); alarmClock.removeClock(2)}, 2);


alarmClock.addClock("23:01", () => {
    console.log("WAKE UUUUUUUUUUP");
    alarmClock.stop();
    alarmClock.clearAlarms();
    alarmClock.printAlarms();
}, 3);
alarmClock.addClock("23:02", () => console.log("HVATIT SPAT"), 1);

alarmClock.printAlarms();
alarmClock.start();