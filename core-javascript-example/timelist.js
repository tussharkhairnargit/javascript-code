// Description: This file contains the code for the time list.
// Example -  while & do-while loop

import { of } from "rxjs";

function listOfHours() {
  let i = 0;
  const timeSlots = [];


  // for(i = 0; i <= 24; i++) {
  //   timeSlots.push({ 'key': i, 'value': i });
  // }
   

  while (i <= 24) {
    timeSlots.push({ 'key': i, 'value': i });
    i++;
  }

  // do {
  //   i++;
  //   timeSlots.push({ 'key': i, 'value': i });
  // } while (i <24)

  // for (let i of Array.from({ length: 24 }, (_, i) => i)) {
  //   timeSlots.push({ 'key': i, 'value': i });
  // }

  return timeSlots;
}

const timeSlots = listOfHours();
console.log('timeSlots: ', timeSlots);
