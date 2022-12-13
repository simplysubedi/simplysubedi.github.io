class Bank {
    static nextNumber = 1000;
    constructor() {
        this.accounts = [];
    }

    addAccount() {
        const accountNumber = Bank.nextNumber;
        this.accounts = [...this.accounts, new Account(accountNumber)];
        Bank.nextNumber++;
        return accountNumber;
    }
    addSavingsAccount(interest) {
        const accountNumber = Bank.nextNumber;
        this.accounts = [
            ...this.accounts,
            new SavingsAccount(accountNumber, interest),
        ];
        Bank.nextNumber++;
        return accountNumber;
    }

    addCheckingAccount(overDraft) {
        const accountNumber = Bank.nextNumber;
        this.accounts = [
            ...this.accounts,
            new CheckingAccount(accountNumber, overDraft),
        ];
        Bank.nextNumber++;
        return accountNumber;
    }

    closeAccount(number) {
        const totalaccounts = this.accounts.length;
        this.accounts = this.accounts.filter((acc) => acc._number != number);
        return totalaccounts === this.accounts.length ? false : true;
    }

    accountReport() {
        return this.accounts.map((acc) => acc.toString()).join("\n");
    }

    endOfMonth() {
        return this.accounts.map((acc) => acc.endOfMonth()).join("\n");
    }
}