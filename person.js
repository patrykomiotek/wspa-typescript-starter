var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    Person.prototype.getUsername = function () {
        var output = "User: ".concat(this._firstName, " ").concat(this._lastName);
        if (this._age) {
            output = "".concat(output, ", age: ").concat(this._age);
        }
        return output;
    };
    return Person;
}());
