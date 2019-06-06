
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

 function numberToString (n){
     return str = n.toString();
 }

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function increase (n){
    return n += 1;
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

function decrease (n){
    return n-= 1;
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

function add (x, y){
    var sum = x+y;
    return sum;
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

 function subtract (x, y){
     var difference = x-y;
     return difference;
 }

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

 function multiply (x, y){
     var product = x*y;
     return product;
 }

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

 function divide (x, y){
     var quotient = x/y;
     return quotient;
 }

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

function square (x){
    return x*x;
}

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

 function calculate (operation, x, y){
    switch(operation){
        case 'add':
            var text = x +' + '+ y +" = " + add(x,y);
            console.log(text);
            return add (x,y);
            break;      
        case 'subtract':
            var text = x +' - '+y+" = " + subtract(x,y);
            console.log(text);
            return subtract (x,y);
            break;
        case 'multiply':
            var text = x +' * '+y+" = " + multiply(x,y);
            console.log(text);
            return multiply (x,y);
            break;      
        case 'divide':
            var text = x +' / '+y+" = " + divide(x,y);
            console.log(text);
            return divide (x,y);
            break;
        }
 }

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

 function isGreaterThan (a,b){
     if (a>b){
         return true;
     }else{
         return false;
     }
 }

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

 function isLessThan (a, b){
     if (a<b){
         return true;
     }else{
         return false;
     }
 }

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

 function areEqual (a,b){
     if (a===b){
         return true;
     }else{
         return false;
     }
 }

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum (x, y){
    if (x>y){
        return y;
    }else{
        return x;
    }
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

function maximum (x, y){
    if (x<y){
        return y;
    }else{
        return x;
    }
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

 function isEven (n){
     if (n%2==0){
         return true;
     }else{
         return false;
     }
 }

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

 function isOdd (n){
     if(n%2!==0){
         return true;
     }else{
         return false;
     }
 }

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

function letterGrade (score, total){
    var grades = {
        A:0.9,
        B:0.8,
        C:0.7,
        D:0.6,
        F:0.0
    }
    for (key in grades){
        if (score/total >=grades[key]){
            return key;
    }else{
        return 'F';
    }
}
}

console.log (letterGrade (25,20));

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

 function incrementReviews (restaurant){
    if (!(restaurant.hasOwnProperty('reviews'))){
        restaurant.reviews = 1;
    }else{
        restaurant.reviews +=1;
    }

    return restaurant;
 }

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

function combine (word1, word2){
    return word1 + " "+word2;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

 function createCircle (radius){
    circle = {};
    circle.area = Math.PI*radius*radius;
    circle.circumference = Math.PI*2*radius;
    return circle;
 }
