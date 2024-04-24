const bankAccount = {
  _balance: 1000,

  formattedBalance: function() {
    return `$ ${this._balance}`
  },
  getBalance: function() {
    return this._balance
  },
  setBalance: function(value) {
    this._balance = value
  },
  transfer: function(value, targetAccount) {
    if(value > this._balance) {
      throw new Error('Insufficient funds')
    }

    this._balance -= value;

    const targetCurrentBalance = targetAccount.getBalance()
    targetAccount.setBalance(targetCurrentBalance + value)
  }
}

const account1 = Object.create(bankAccount)
const account2 = Object.create(bankAccount)

console.log('accont1', account1.formattedBalance())
console.log('accont2', account2.formattedBalance())

account1.transfer(900, account2)

console.log('accont1 new balance', account1.formattedBalance())
console.log('accont2 new balance', account2.formattedBalance())

