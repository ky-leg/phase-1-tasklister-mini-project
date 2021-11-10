document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

//grabber
const inputField = document.getElementById('new-task-description')
const list = document.getElementById('tasks')
const form = document.getElementById('create-task-form')





form.addEventListener("submit", function (event) {
  event.preventDefault();
  let li = document.createElement('li')
  let xBtn = document.createElement('button')
  xBtn.textContent = 'x'
  li.innerText = `${inputField.value} `
  li.appendChild(xBtn)
  list.appendChild(li)
});

