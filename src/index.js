document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

//grabber
const inputField = document.getElementById('new-task-description')
const list = document.getElementById('tasks')
const form = document.getElementById('create-task-form')





form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event.target.input.value)
});