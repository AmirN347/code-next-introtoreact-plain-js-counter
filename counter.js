// TODO: Add counter code here.
const count = document.getElementById('counternum');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

var counter = 0;
incrementButton.addEventListener('click', () => {
  count.innerHTML = counter++;
});

decrementButton.addEventListener('click', () => {
  

  if (counter - 1 < 0) {
    alert('cant go below 0');
  } else {
    counter--;
    count.innerHTML = counter;
  }
});
