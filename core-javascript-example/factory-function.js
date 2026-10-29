
//Example of factory function

/**
 * factory functions defined primarily to manage creation of Object, 
 * In below example its returning Object literal. 
 * @returns object literal 
 */

function newObject() {
  return {
    name: "",
    value: "",
  };
}

const obj = newObject();

if (obj instanceof newObject) console.log("its a instanceof newObject");
else console.log("it not a instanceof newObject");


//Example 1
function newObject(type) {
  switch (type) {
    case "permanantJob": {
      return {
        name: "",
        value: "",
        employeeId: "",
        contractDetails: "____UNDEFINED____",
      };
    }
    case "contractJob": {
      return {
        name: "",
        value: "",
        employeeId: null,
        contractDetails: {},
      };
    }
  }
}
