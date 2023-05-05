// TODO: Add counter code here.
const count = document.getElementById('counternum');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

var counter = 0;
var incrementButtonCount = 0;
incrementButton.addEventListener('click', () => {
  count.innerHTML = counter++;
  incrementButtonCount++;
  if (incrementButtonCount > 10) {
    console.log('You have clicked too many times');
  } else {
    console.log('Incremented button');
  }

  console.log({ counter });
});

decrementButton.addEventListener('click', () => {
  //if statement using syntatic sugar condition? true excuetion: false excuetion

  if (counter - 1 < 0) {
    alert('cant go below 0');
  } else {
    counter--;
    count.innerHTML = counter;
  }

  console.log('Decremented button');
  console.log({ counter });
});
