/* sophisticated_code.js */

// This code is a simulation of a banking system. It allows users to create accounts, perform transactions, and view their balance.

// Account class representing a bank account
class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
    this.transactions = [];
  }

  // Method to deposit money into the account
  deposit(amount) {
    this.balance += amount;
    this.transactions.push({
      type: "DEPOSIT",
      amount: amount,
      timestamp: new Date()
    });
  }

  // Method to withdraw money from the account
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push({
        type: "WITHDRAW",
        amount: amount,
        timestamp: new Date()
      });
    } else {
      console.log("Insufficient funds!");
    }
  }

  // Method to get account balance
  getBalance() {
    return this.balance;
  }

  // Method to get account transactions
  getTransactions() {
    return this.transactions;
  }
}

// Bank class representing a banking system
class Bank {
  constructor() {
    this.customers = [];
  }

  // Method to create a new account for a customer
  createAccount(customerName, initialBalance) {
    const account = new Account(customerName, initialBalance);
    this.customers.push(account);
    console.log("Account created successfully!");
  }

  // Method to perform a transaction on a customer's account
  performTransaction(customerName, amount, transactionType) {
    const customerAccount = this.customers.find(
      (account) => account.name === customerName
    );

    if (customerAccount) {
      if (transactionType === "DEPOSIT") {
        customerAccount.deposit(amount);
      } else if (transactionType === "WITHDRAW") {
        customerAccount.withdraw(amount);
      } else {
        console.log("Invalid transaction type!");
      }
    } else {
      console.log("Customer not found!");
    }
  }

  // Method to get customer account balance
  getBalance(customerName) {
    const customerAccount = this.customers.find(
      (account) => account.name === customerName
    );

    if (customerAccount) {
      return customerAccount.getBalance();
    } else {
      console.log("Customer not found!");
    }
  }

  // Method to get customer account transactions
  getTransactions(customerName) {
    const customerAccount = this.customers.find(
      (account) => account.name === customerName
    );

    if (customerAccount) {
      return customerAccount.getTransactions();
    } else {
      console.log("Customer not found!");
    }
  }
}

// Example usage of the banking system
const bank = new Bank();
bank.createAccount("John Doe", 1000);
bank.createAccount("Jane Smith", 500);

bank.performTransaction("John Doe", 200, "WITHDRAW");

console.log("John Doe's balance: ", bank.getBalance("John Doe"));

const johnsTransactions = bank.getTransactions("John Doe");
console.log("John Doe's transactions: ", johnsTransactions);

bank.performTransaction("Jane Smith", 300, "DEPOSIT");

console.log("Jane Smith's balance: ", bank.getBalance("Jane Smith"));

const janesTransactions = bank.getTransactions("Jane Smith");
console.log("Jane Smith's transactions: ", janesTransactions);