
String.prototype.filter = function (...value) {
    return this.split(" ")
        .filter((str) => !value.includes(str))
        .join(" ");
};
// ===============================================================================================================
Array.prototype.bubbleSort = function () {
    for (let i = 0; i < this.length; i++) {
        for (let j = i; j < this.length; j++) {
            if (this[i] > this[j]) {
                let temp = this[j];
                this[j] = this[i];
                this[i] = temp;
            }
        }
    }
    return this;
};
// ===============================================================================================================
let Person = function () { };
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
};
Person.prototype.describe = function () {
    return this.name + ", " + this.age + " years old.";
};

let Teacher = function () { };

Teacher.prototype = new Person();

let teacher = new Teacher();
teacher.initialize("Pukar", 23);
Teacher.prototype.teaches = function (subject) {
    return `${this.name} is now teaching ${subject}`;
};
