let withdraw = document.getElementById('withdraw')
let deposit = document.getElementById('deposit')
let result = document.getElementById('result')
let input = document.getElementById('number')

class Bank{
  constructor(name,age,balance){
    this.name = name
    this.age = age
    this.balance = balance
  }
  deposit(item){
    this.balance += item 
      console.log(`Money deposited: ${item}`)
    console.log(`Remaining balance: ${this.balance}`)
    result.innerText = `Remaining balance: ${this.balance}`
  }
  withdraw(item){
    if(this.balance >= item){
    this.balance -= item
    console.log(`Money withdrawn: ${item}`)
    console.log(`Remaining balance: ${this.balance}`)
    result.innerText = `Remaining balance: ${this.balance}`
    }
    else
    {
      console.log()
    console.log(`Remaining balance: ${this.balance}`)
    result.innerText = 'Money Insufficient\n' + `Balance: ${this.balance}`}
    }
  }

const details= new Bank('rohit',26,0)
withdraw.onclick = () => {
  details.withdraw(Number(input.value))
}
deposit.onclick = () => {
  details.deposit(Number(input.value))
}