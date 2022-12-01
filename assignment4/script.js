function max(p1, p2) {
    if (p1 > p2) {
        return p1;
    }
    else {
        return p2;
    }
}
// console.log("Problem 1 Output");
// console.log("-----------------------");
// console.log(max(1, 2));
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
function maxOfThree(p1, p2, p3) {
    if (p1 > p2 && p1 > p3) {
        return p1;
    }
    else if (p2 > p1 && p2 > p3) {
        return p2;
    }

    else {
        return p3;
    }
}

console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
function isVowel(char) {

    if (char == A || char == a || char == E || char == e || char == I || char == i || char == O || char == o || char == U || char == u)
        return true;


}

function sum(a) {
    var total = 0;
    a.forEach(element => total += element);

    return total;
}



function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}
