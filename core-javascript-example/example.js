
// Promise → Microtask
// setTimeout → Task/Macrotask
function singleLoop() {
 console.log('START');
    let j = 0;
    for(let i=0;i<10;i++){
      j = i;
  }

  setTimeOut(()=> {
        console.log("setTimeout);
  }, 0);
  
 const test = promise.resolve(true).then( ()=>{
     console.log("Promise");
 }):

 console.log('END');
};


function example() {
      console.log("1");
      setTimeout(() => {
          console.log("2");
      }, 0);
      Promise.resolve().then(() => {
          console.log("3");
      });
      console.log("4");
}
// OUTPUT :1, 4, 3, 2

