class Person {
    private _firstName: string;
    private _lastName: string | undefined;
    private _age: number | undefined;

    constructor(firstName: string, lastName?: string, age?: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    getUsername(): string {
        let output = `User: ${this._firstName} ${this._lastName}`;
        if (this._age) {
            output = `${output}, age: ${this._age}`;
        }

        return output;
    }
}