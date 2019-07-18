// ------ Advanced Challenge: Using createElement for Components ------

const list = document.createElement("u")
const listItem = document.createElement("li")
listItem.className = "president"
listItem.textContent = "George Bush"

list.appendChild(listItem)

console.log(list)

