/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */
function firstReverse(str) {
    if (typeof str == "string") {
    var splitStr = str.split("");
    // console.log(splitStr);
    var newArr = []
    for (var i=splitStr.length-1; i>=0; i--) {
        newArr.push(splitStr[i]);
        // console.log(newArr)
    }
    var newStr = newArr.join("");
    console.log(newStr);
    return newStr;
    } else {
        return null;
    }
}


 /** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */
function alphaOrder(str) {
    if (typeof str == "string") {
        var splitStr = str.split("");
        // console.log(splitStr);
        var sort = splitStr.sort();
        // console.log(sort);
        var newStr = sort.join("");
    } else {
        return null;
    }
    return newStr;
}

 /** Function: vowelCount
 * The function will take the num parameter being passed in and
 * return the number of vowels in the string
 * @param {string} num
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */
function vowelCount(num) {
    if (typeof num == "string") {
        var splitStr = num.split("");
        // console.log(splitStr);
        var count = 0;
            for (var i=0; i<splitStr.length; i++) {
                if (splitStr[i].match(/[aeiouAEIOU]/)) {
                count += 1;
            }
        }
    } else {
        return null;
    }
    return count;
}

 /** Function: timeConvert
 * The function will take the str parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Seperate the number of hours
 * and minutes with a colon
 * @param {number} str
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */
function timeConvert(str) {
    var hour = 0;
    while (str >= 60) {
        hour += 1;
        str -= 60; 
    }
    console.log(hour + ":" + str);
}

 /** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */
function repeatString(str, times) {
    var repeating = []
    for (var i=0; i<times; i++) {
        repeating.push(str);
    }
    var joined = repeating.join("");
    console.log(joined);
}

/**
 * Below here we see a module.exports which is set to an object with a bunch of keys.
 * The module.exports syntax is a built-in javascript keyword that
 * allows functionality from this file to be used in other files.  
 * Here we are exporting an object with a bunch of keys that will reference 
 * the functions you have made. After you are done implementing a function,
 * change the 'null' to reference the corresponding function you have just created.
 * Then go into your terminal and run 'npm test' to see if the tests pass for your function.
 *
 * The reason why we export our functions out of this file is because behind the scenes,
 * the test-runner is importing this file so that it can gain access to the functions
 * and run tests on it.
 */

module.exports = {
    firstReverse: firstReverse,
    alphaOrder: alphaOrder,
    vowelCount: vowelCount,
    timeConvert: timeConvert,
    repeatString: repeatString
}
