describe("Testing methods from account class", () => {
    const acc = new Account(123456789);
    it("Returns the account number", () => {
        assert.equal(123456789, acc.getNumber());
    });

    it("Deposits amount to the account and get the returning balance", () => {
        acc.deposit(45);
        assert.equal(45, acc.getBalance());
    });

    it("Withdraws amount from the account and get the returning balance", () => {
        acc.withdraw(20);
        assert.equal(25, acc.getBalance());
    });
});

describe("Testing methods from SAVINGS account class", () => {
    const savingsAcc = new SavingsAccount(123456789, 10);
    savingsAcc.deposit(100);

    it("Returns the account balance after adding the interest", () => {
        assert.equal(110, savingsAcc.addInterest());
    });
});

describe("Testing methods from CHECKINGS account class", () => {
    const checkingAcc = new CheckingAccount(123456789, 100);
    checkingAcc.deposit(100);

    it("Returns the account balance after withdrawing over draft amount from the account", () => {
        assert.equal(-95, checkingAcc.withdraw(195));
    });
});

describe("Testing methods in bank", () => {
    const bank = new Bank();
    bank.addAccount();
    bank.addAccount();
    bank.addCheckingAccount(100);
    bank.addSavingsAccount(10);
    it("Returns account details of each account type for the end of the month", () => {
        assert.equal(
            "Warning, low balance CheckingAccount 1002: balance: 0 overdraft limit: 100\nInterest added SavingsAccount 1003: balance: 0 interest: 0.1",
            bank.endOfMonth().trim()
        );
    });
    it("Returns account details of each account type", () => {
        assert.equal(
            "Account 1000: balance 0\nAccount 1001: balance 0\nAccount number: 1002 Balance: 0 OverDraft Amount: 100\nAccount 1003: interest rate 10: balance: 0",
            bank.accountReport()
        );
    });
    it("Returns recently added savings bank account number", () => {
        assert.equal(1004, bank.addSavingsAccount(10));
    });

    it("Returns recently added checkings bank account number", () => {
        assert.equal(1005, bank.addCheckingAccount(100));
    });

    it("Returns recently added bank account number", () => {
        assert.equal(1006, bank.addAccount());
    });

    it("Returns if the account with the given number was closed", () => {
        assert.equal(true, bank.closeAccount(1006));
    });
});