console.clear();
require('./dataFile.js')
const moment = require('moment'); // require
const { data } = require('./dataFile.js');


console.log( data);
return;
//let testValue = '21:00PM - 6:00AM';
// let testValue = '000:00PM - 06:00AM';
// let testValue = '7:00PM - 007:00AM';
let testValue = '7AM - 3:59AM -1';

const label = testValue;
const splitbyhypen = label.split('-');


console.log("splitbyhypen", splitbyhypen?.length-1)
if((splitbyhypen?.length -1) >= 1) {
  let startTime = splitbyhypen[0];
  let endTime = splitbyhypen[1];
  console.log('startTime: ', startTime);
  console.log('end: ', endTime);
}
return;



function  transformedString (timeString)  {
  const parsedTime = moment(timeString, "h:mmA");
  const timePart = parsedTime.format("hh:mm");
  const amPmIndicator = parsedTime.format("A");
  return timePart + amPmIndicator.toUpperCase()
}
console.log("\ntransformed string: ", transformedString('07:00AM'));
// console.log("\ntransformString start time : ", transformedString(startTime));
// console.log( "transformString end time : ", transformedString(endTime));




function modifiedTime(time){
  let splitbycolon = time.trim().split(':');

  splitbycolon.forEach((item, index1) => {
    if (index1 == 0 && !isNaN(item)) {
      item = Number(item);
      if (item < 10) {
        item = '0' + item.toString();
        splitbycolon.splice(0, 1, item);
      } else {
        splitbycolon.splice(0, 1, item);
      }
    } else {
      if (item.includes('AM') || item.includes('PM')) {
          if (String(item).endsWith('AM') || String(item).endsWith('PM')) {}
      }
    }

  });
  time = splitbycolon.join(':')
  return time;
};

let modififedStartTime = modifiedTime(startTime);
let modififedEndTime = modifiedTime(endTime);
//let modifiedText = [modififedStartTime, modififedEndTime]//.join(' - ');


// console.log(modifiedText);
// console.log('\n ----------------------------------------');


tempList.forEach(item => {
  const splitbyhypen = item.label.split('-');
  let startTime = splitbyhypen[0];
  let endTime = splitbyhypen[1];
 item.label2 = transformedString(startTime)+" - "+transformedString(endTime);
 console.log(transformedString(startTime));
});
