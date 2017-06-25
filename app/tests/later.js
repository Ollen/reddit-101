const later = require('later');

let d = new Date();
console.log(`Current Datetime: ${d}`);

/**
 * Time Periods
 */

let phSched = {
    schedules: [{h: [1, 4, 7, 10, 13, 16, 19, 22]}] // Every 3 Hours (GMT +800)
};
let phOccur = later.schedule(phSched).next(5);

let sched = later.parse.text('every 2 mins');
let occurrences = later.schedule(sched).next(5);

for(let i = 0; i < 5; i++) {
    console.log(phOccur[i].toString());
}

for(let i = 0; i < 5; i++) {
    console.log(occurrences[i].toString());
}

let e = later.setInterval(() => {
    console.log(new Date(Date.now()).toString());
}, sched);
