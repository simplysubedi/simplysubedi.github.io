class CheckingAccount extends Account {
    constructor(number, overDraftAmount) {
        super(number);
        this.overDraftAmount = overDraftAmount;
    }

    setOverDraftAmount(amt) {
        this.overDraftAmount = amt;
    }
    getOverDraftAmount() {
        return this.overDraftAmount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (
            amount > this._balance &&
            amount - this._balance > this.overDraftAmount
        ) {
            throw Error("OverDraft amount limit reached");
        }
        this._balance -= amount;
        return this._balance;
    }

    toString() {
        return `Account number: ${this._number} Balance: ${this._balance} OverDraft Amount: ${this.overDraftAmount}`;
    }

    endOfMonth() {
        return `Warning, low balance CheckingAccount ${this._number}: balance: ${this._balance} overdraft limit: ${this.overDraftAmount}`;
    }
}