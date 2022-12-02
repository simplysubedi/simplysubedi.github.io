function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}
function max(p1, p2) {
    if (p1 > p2) {
        return p1;
    }
    else {
        return p2;
    }
}

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

console.log("Expected output of maxOfThree(20,10,30) is 30  " + myFunctionTest(30, maxOfThree(20, 10, 30)));


function isVowel(char) {

    if (char == 'A' || char == 'a' || char == 'E' || char == 'e' || char == 'I' || char == 'i' || char == 'O' || char == 'o' || char == 'U' || char == 'u')
        return true;
}
console.log("Expected output of isVowel(a) is true  " + myFunctionTest(true, isVowel('a')));

function sum(a) {
    var total = 0;
    a.forEach(element => total += element);

    return total;
}
console.log("Expected output of sum([5,10,2,3,20]) is 40 " + myFunctionTest(40, sum([5, 10, 2, 3, 20])));

function multiply(a) {
    var total = 1;
    a.forEach(element => total *= element);

    return total;
}

console.log("Expected output of multiply([2,3,1,4]) is 24 " + myFunctionTest(24, multiply([2, 3, 1, 4])));
function reverse(str) {
    return (str === '') ? '' : reverse(str.substr(1)) + str.charAt(0);
}
console.log("Expected output of reverse(Arjun) is nujrA " + myFunctionTest("nujrA", reverse("Arjun")));
function findLongestWord(a) {
    let ele;
    var long = 0;
    a.forEach(element => {
        if (long < element.length) {
            ele = element;
            long = element.length;
        }
    });
    return ele.length;

}
console.log("Expected output of findLongestWord([Jack,Tom,Bob]) is 4 " + myFunctionTest(4, findLongestWord(["Jack", "Tom", "Bob"])));

function filterLongWords(arr, num) {
    let result = [];
    arr.forEach(element => {
        if (element.length > num) {
            result.push(element);
        }

    });

    return result;

}

//console.log("Expected output of filterLongWords([Arjun,Tom,Nepal,Bob],4) is [Arjun, Nepal]" + myFunctionTest(["Arjun", "Nepal"], filterLongWords((["Arjun", "Tom", "Nepal", "Bob"]), 4)));
const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
    return elem * 10;
})
console.log(b.toString());
const c = a.filter(function (elem, i, array) {
    return elem === 3;
});
console.log(c.toString());
const d = a.reduce(function (prevValue, elem, i, array) {
    return prevValue * elem;
});
console.log(d);

const d2 = a.find(function (elem) { return elem > 1; }); //3
const d3 = a.findIndex(function (elem) { return elem > 1; }); //1
console.log(d2);
console.log(d3);