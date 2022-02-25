class AlarmClock {
    constructor () {
this.alarmCollection = [];
this.timerId = null;
    }

    addClock(time, callback, id) {
       if (!id) {
            throw new Error ("you cannot add an alarm without an alarm id, bro")
        } else if (this.alarmCollection.some(alarm =>
       alarm.id === id)) {
        alert ("this id is already used, bro")
        } else {
           this.alarmCollection.push({id, time, callback})
            console.log("hello new alarm, this.alarmCollection.length " + this.alarmCollection.length)
         return this.alarmCollection
        }
    }

    removeClock(id) {
        let ai = this.alarmCollection.length;
        const index = this.alarmCollection.findIndex((alarm) => alarm.id === id);
        console.log("clock removed, id:" + id)
       if (index != -1) {
        this.alarmCollection.splice (index, 1)
       return (ai + ">" + this.alarmCollection.length)
       } else {
          return ("no alarm with this id")
       } 
    }

    getCurrentFormattedTime() {
      const date = new Date()
      const a = date.toTimeString(); 
     // console.log( a)
        const b = a.slice(0, 5)
     console.log(b + " now")
         return b
    }

   getAlarmTime(delay) {
        const date = new Date()
        let h = date.getHours()
     let m = date.getMinutes() + delay
     const date1 = new Date()
     date1.setHours (h, m)
     const a = date1.toTimeString(); 
        const b = a.slice(0, 5)
     console.log("alarm at " + b )
         return b
     let h1 = date1.getHours()
     let m1 = date1.getMinutes() 
     return (h1 + " " + m1)
      }


start() {
    const checkClock = () => {
      const a = this.getCurrentFormattedTime()
       
     const arr = this.alarmCollection.filter((alarm) =>
      alarm.time === a)
          if (arr.length != 0) {
              console.log('alarm')
              for (const item of arr) { 
                  item.callback();
              }
          } else {
              console.log('no alarm')
          }
    }
    if (!this.timerId) {
    this.timerId = setInterval (function() {checkClock.call(AlarmClock)}, 30000) 
     console.log("started timerId: " + this.timerId)
     return this.timerId
  }
}

stop() {
    if(this.timerId) {
        clearInterval(this.timerId)
      return  this.timerId = null;
    }
}

printAlarms() {
    this.alarmCollection.forEach(element => {
        console.log(`alarm: Id ${element.id}, time ${element.time}`)
    });
}

  clearAlarms() {
    this.stop()
   return this.alarmCollection = []
  }
}
/*
const alarmclock = new AlarmClock
alarmclock.addClock(alarmclock.getCurrentFormattedTime(), () => {
    let id = setInterval (() => console.log ("get up, bro!"), 1000)
    setTimeout (() => clearInterval(id), 6000)
}, 1)

alarmclock.addClock(alarmclock.getCurrentFormattedTime(), () => {
    let id = setTimeout (() => {
        console.log ("one minute, bro!")
        alarmclock.removeClock.call(alarmclock, 2)
    }, 60000)
}, 2)

alarmclock.addClock(alarmclock.getCurrentFormattedTime(), () => {
    setTimeout (() => {
        console.log("GET UP!!!!!!!")
        alarmclock.printAlarms.call(alarmclock) 
        console.log("to stop timer Id" + alarmclock.timerId)
        alarmclock.stop.call(alarmclock)
        console.log("stopped timer Id" + alarmclock.timerId)
    }, 180000)
}, 3)

alarmclock.start()
*/

const alarmclock1 = new AlarmClock

alarmclock1.addClock(alarmclock1.getAlarmTime(0), () => {
    let id = setInterval (() => console.log ("CALL1: get up, bro!"), 1000);
    setTimeout (() => {
        clearInterval(id)
        console.log("call stopped")
    }, 6000)
}, 1)

alarmclock1.addClock(alarmclock1.getAlarmTime(1), () => {
    console.log ("CALL2: one minute, bro!")
    setTimeout (() => alarmclock1.removeClock.call(alarmclock1, 2), 6000)
}, 2)

alarmclock1.addClock(alarmclock1.getAlarmTime(3), () => {
        console.log("CALL3: GET UP!!!!!!!")
        alarmclock1.printAlarms.call(alarmclock1)
        console.log("to stop. current timerId" + alarmclock1.timerId)
alarmclock1.stop()
console.log("stopped. current timerId" + alarmclock1.timerId)
}, 3)

alarmclock1.start()






