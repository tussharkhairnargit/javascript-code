try {
  let temp;
  console.log(temp);
  if(temp === undefined) {
    throw new Error("temp is undefined");}
} catch (error) {
  console.error("TESTING: " + error);
}

try {
  var temp2;
  console.log(temp2);
  if(temp2 === undefined) {
    throw new Error("temp2 is undefined");}
} catch (error) {
  console.error("TESTING: 2 " + error);
}


/* try {
  const temp ; // Crashes with SyntaxError: Missing initializer in const declaration
  console.log(temp);
  if(temp === undefined) {
    throw new Error("temp is undefined");}
} catch (error) {
  console.error("TESTING: " + error);
} */
