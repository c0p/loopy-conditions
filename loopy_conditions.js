/**
 * Create a function called 'greaterNumber'
 * This function will take in 2 Parameters.
 * You need to check which number is greater and return that number
 * @param  { Number } a
 * @param  { Number } b
 * @return { Number }
 */
console.log("greaterNumber Function \n ")
function greaterNumber(a,b) {
    if (a > b) {
	return a
    } else {
	return b
    }
}

console.log(greaterNumber(123, 163));
console.log("---------------------------------------");

/**
 * Create a function called 'stringOfNumbers'.
 * This function will take in 1 parameter
 * Your task is to add all the numbers in between 0 and n
 * For example if the number is 10 than the function should return:
 * "0,1,2,3,4,5,6,7,8,9,10"
 * @param  { Number } n
 * @return { String }
 */
console.log("stringOfNumbers Function \n ")
function stringOfNumbers(n) {
    var a = [ ];
    for (var i=0; i<=n; i++) {
	a.push(i)
    }
    return a.toString()
}

console.log(stringOfNumbers(10));
console.log("---------------------------------------");


/**
 * Create a function called 'sumOfArray'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return the sum of all the numbers in the array.
 * You must check if the item in the array is a number
 * @param  { array } arr
 * @return { Number }
 */

console.log("sumOfArray Function \n ")
function sumOfArray(arr) {
    console.log("test set: "  + "[" +  arr + "]");
    var sum=0;
    for (var i=0; i<=arr.length-1; i++) {
	if (isNaN(arr[i])) {
	    console.log("error : " + arr[i] + " at index " + i + " is not a number! continuing iteration")
	    continue
	} else {
	    sum +=arr[i]
	}
    }
    return sum
}


console.log("sum of array is " + sumOfArray([2,4,10,"evil",4, "kittens", 3, function meow() {console.log("meow")}, 3, "True", 32])); //validation : 58

console.log("---------------------------------------");



/**
 * Create a function called 'getEvens'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the even numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */
console.log("getEvens Function \n ")
function getEvens(arr) {
    console.log("original : " + arr)
    var evenArr = [ ];
    for (var i=0; i<=arr.length-1; i++) {
	if (arr[i] % 2 === 0) {
	    evenArr.push(arr[i])
	}
    }
    return evenArr;
}

console.log("new : " + getEvens([1,2,10,13,15,32,4000,100]));

console.log("---------------------------------------");
	    





/**
 * Create a function called 'getOdds'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the odd numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */
console.log("getOdds Function \n ")
function getOdds(arr) {
    console.log("original : " + arr)
    var oddArr = [ ];
    for (var i=0; i<=arr.length-1; i++) {
	if (arr[i] % 2 !== 0) {
	    oddArr.push(arr[i])
	}
    }
    return oddArr;
}

console.log("new : " + getOdds([1,2,10,13,15,32,9,87, 3179,4000,100]));

console.log("---------------------------------------");


/**
 * Create a function called 'calculate'.
 * This function will take in 3 parameters:
 * The first parameter is a number.
 * The second parameter is a number.
 * The third param is a string that will be 'add', 'subtract', 'multiply', 'divide'.
 * Your task is to do a mathematical operation on the 2 numbers based on the third parameter.
 * The function should return the string "Invalid operator" if the operator is
 * not 'add', 'subtract', 'multiply', 'divide'.
 * @param  { Number } int1
 * @param  { Number } int2
 * @param  { String } operator ('add', subtract, 'multiply', 'divide')
 * @return { Number/String }
 */
console.log("calculate Function \n ")
function calculate(firstNum, secNum, Op) {
    switch (Op.toLowerCase()) {
    case "add":
	return firstNum + secNum
	break;

    case "subtract":
	return firstNum - secNum
	break;

    case "multiply":
	return firstNum * secNum
	break;

    case "divide":
	return firstNum / secNum
	break;

    default:
	return "Invalid operator"
    }
}
console.log(calculate(10, 2, "aDD"))
console.log(calculate(10, 2, "subTract"))
console.log(calculate(10, 2, "multiPLY"))
console.log(calculate(10, 2, "divide"))
console.log(calculate(10, 2, "yikes"))


    
    
    
