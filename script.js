let count = 0;
let greeting = "Hi!"
let name = "Nabeel"
let greetingmessage = greeting + " " + name + ". Welcome Here! 👋";
const welcome = () => {
  document.getElementById("welcome-el").innerText = greetingmessage;
}
window.addEventListener('DOMContentLoaded', function() {
  welcome();
}, true);

const increment = () => {
  count += 1;
  document.getElementById("count-el").innerText = count;
}

const save = () => {
  let prev_record = " " + count + " - "
  document.getElementById("previous-el").innerText += prev_record;
  count = 0;
  document.getElementById("count-el").innerText = count;
}

