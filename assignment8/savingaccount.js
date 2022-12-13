class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this.interest = interest;
    }

    setInterest(interest) {
        this.interest = interest;
    }

    getInterest() {
        return this.interest;
    }

    addInterest() {
        this._balance = this._balance + (this._balance * this.interest) / 100;
        return this._balance;
    }

    toString() {
        return (
            "Account " +
            this._number +
            ": interest rate " +
            this.interest +
            ": balance: " +
            this._balance
        );
    }

    endOfMonth() {
        this.addInterest();
        return `Interest added SavingsAccount ${this._number}: balance: ${this._balance
            } interest: ${this.interest / 100}`;
    }
}