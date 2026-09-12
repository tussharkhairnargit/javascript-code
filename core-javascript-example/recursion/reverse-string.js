





/**
 Write a recursive function that takes a string and returns a new string in reverse order.
 */
function reverseString(str) {
    if(typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    if(str?.length === 0) {
        return '';
    }

    return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}

//reverseString('hello'); // Output: 'olleh'

/** 
* Write a function that prints numbers from a given n down to 1, and another that counts from 1 up to n.
 */


/**
* Write a recursive function that adds all numbers from 1 up to a target number n. 
*/


/**
 *  Write a function power(base, exponent) that calculates base raised to the exponent power without using loops or Math.pow()
 */


/**
 * Write a function that finds the factorial of a given number n (n! = n × (n-1)!).
 */


/**
 * Write a function that takes an array of numbers and returns the sum of all elements recursively.
 */

/**
 * Write a function that returns the n-th number of the Fibonacci sequence.
 */

/**
 *  Write a recursive function that checks if a given string reads the same forwards and backwards
 */


/**
 * Flatten Nested Arrays : Write a function flatten(arr) that transforms a multi-dimensional array with deep nesting into a single flat array.
 */


/**
 * Deep Object Search (JSON Search): Write a function contains(obj, targetValue) that checks if a nested object or JSON structure contains a specific value anywhere inside its keys or sub-objects.
 */