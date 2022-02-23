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

    // start() {
    //     function checkClock(callClock) {

    //     }
    // }


    stop() {
        if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        } 
    }

    printAlarms() {
        alarmCollection.forEach(elem => {
            console.log(`Будильник ${elem.id} заведен на ${elem.time}`)
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}





 //getCurrentFormattedTime - возвращает текущее время в строковом формате HH:MM.