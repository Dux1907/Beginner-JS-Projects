 
 let billInput = document.getElementById('bill')
  let tippercentageinput = document.getElementById('tip')
const calculatebill = () => {
   bill = Number(billInput.value)
  tippercentage = Number(tippercentageinput.value)
  let tip = tippercentage/100
  let person = document.getElementById('person')
  let total = (bill + (tip*bill))/Number(person.innerText)
  let total2 = document.getElementById('total2')
  total2.innerText = `${total.toFixed(2)}`
}


const increasepeople = () =>{
   let people = document.getElementById('person')
  let k = Number(people.innerText)
  k+=1;
  people.innerText = k

  calculatebill()
}
const decreasepeople = () =>{
   let people = document.getElementById('person')
  let k = Number(people.innerText)
  if(k <= 1)
    return
  k-=1;
  people.innerText = k

  calculatebill()
}
