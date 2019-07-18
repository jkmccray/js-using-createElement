// ------ Advanced Challenge: Using createElement for Components ------

// Simple Example: 
const list = document.createElement("u")
const listItem = document.createElement("li")
listItem.className = "president"
listItem.textContent = "George Bush"

list.appendChild(listItem)

console.log(list)

// Challenge: 
const messages = document.querySelector("#messages")
const newMessage1 = document.createElement("section")
newMessage1.textContent = "Monday's lunch: Tuna sandwich"
const newMessage2 = document.createElement("section")
newMessage2.textContent = "Tuesday's lunch: Turkey sandwich"
const newMessage3 = document.createElement("section")
newMessage3.textContent = "Wednesday's lunch: Go out to eat"
const newMessage4 = document.createElement("section")
newMessage4.textContent = "Thusday's lunch: Salad"
const newMessage5 = document.createElement("section")
newMessage5.textContent = "Friday's lunch: Fried chicken"

messages.appendChild(newMessage1)
messages.appendChild(newMessage2)
messages.appendChild(newMessage3)
messages.appendChild(newMessage4)
messages.appendChild(newMessage5)
