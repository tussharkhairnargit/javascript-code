
const list = [{ country: "USA" }, { country: "Canada" }, { country: "Mexico" }];

//creat array of string with country names, withuot loops or any inbuild functions

function getCountryNames(arr, index = 0, result = []) {
    if (arr.length === 0) {
        return [];
    }
    if (index < arr.length) {
        result.push(arr[index].country);
        return getCountryNames(arr, index + 1, result);
    }
    return result;

}

console.log(getCountryNames(list)); // Output: ["USA", "Canada", "Mexico"]
