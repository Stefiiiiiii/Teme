/*
class Bank {
  name = "Bank";
  swift = 12312;
  country = "Romania";
  accountsList = ["count1", "count2"];

  constructor(numberAccount, id, sold, nameAccount) {
    this.numberAccount = numberAccount;
    this.id = id;
    this.sold = sold;
    this.nameAccount = nameAccount;
  }

  createAccount(newAccount) {
    this.accountsList.push(newAccount);
  }

  openAccounts() {
    console.log(this.accountsList);
  }

  negativeAccounts() {}
}

Bank.prototype.pay = function (money, accountsNr) {
  console.log(`account ${this.accountsList[accountsNr]} payed ${money}`);
};

const account1 = new Bank(1, 12345, 300, "Andrei");

account1.pay(200, 1);
account1.openAccounts();
account1.createAccount("count3");
account1.openAccounts();

*/
////////

class Bank {
  name;
  swift;
  country;
  accounts = [];

  constructor(name, swift, country) {
    this.name = name;
    this.swift = swift;
    this.country = country;
  }

  listAccounts() {
    return this.accounts;
  }

  addAccount(acc) {
    this.accounts.push(acc);
  }

  listNegativeAccounts() {
    return this.accounts.filter((x) => x.balance < 0);
  }
}

const BCR = new Bank("BCR", "abcdser", "Romania");
console.log(BCR);

function BankAccount(accountNumber, Id, balance, accountName) {
  this.accountNumber = accountNumber;
  this.Id = Id;
  this.balance = balance;
  this.accountName = accountName;
}

BankAccount.prototype.changeBalance = function (sum) {
  this.balance = this.balance + sum;
};

const acc1 = new BankAccount("RO1234", 123, 2300, "Vasilica");
console.log(acc1);

const acc2 = new BankAccount("RO435", 456, -5600, "Corina");
console.log(acc2);

BCR.addAccount(acc1);
BCR.addAccount(acc2);

console.log(BCR.listAccounts());
console.log(BCR.listNegativeAccounts());

acc1.changeBalance(2340);
console.log(acc1);
