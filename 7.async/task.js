class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock (time, callFunc) {
        if (!time || !callFunc) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        for (let i = 0; i < this.alarmCollection.length; i++) {
            if (this.alarmCollection[i].time == time) {
                console.warn('Уже присутствует звонок на это же время');
            }
        }
        /* if (time == this.intervalId) {
            console.warn('Уже присутствует звонок на это же время');
        } */
        this.alarmCollection.push(
            {
                callback: callFunc,
                time: time,
                canCall: true,
            }
        );
    }

    removeClock (time) {
         this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
/*         for (let i = 0; i < this.alarmCollection.length; i++) {
            if (this.alarmCollection[i].time == time) {
                this.alarmCollection.splice(i, 1);
            }
        } */
    }

    getCurrentFormattedTime () {
/*         for (let i = 0; i < this.alarmCollection.length; i++) {
            if (this.alarmCollection[i].canCall) {
                return this.alarmCollection[i].time;
            }
        } */   
        let currentTime = new Date();
        let h = currentTime.getHours();
        let m = currentTime.getMinutes();
        if (h < 10) {
            h = '0' + h;
        }
        if (m < 10) {
            m = '0' + m;
        }
        let answer = h + ':' + m;
        return answer;
    }

    start () {
        if (!this.intervalId) {
            this.intervalId = setInterval(this.alarmCollection.forEach(elem => {
                if(elem.time == this.getCurrentFormattedTime() && elem.canCall) {
                    elem.canCall = false;
                    elem.callback();
                }
            }), 1000)
        }
    }

    stop () {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls () {
        this.alarmCollection.forEach(elem => elem.canCall = true)
    }

    clearAlarms () {
        this.stop();
        this.alarmCollection = [];
    }
}