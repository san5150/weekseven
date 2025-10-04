// -------------------
// Part 2: Functions
// -------------------

function toggleBoxAnimation() {
  const box = document.getElementById('box');
  box.classList.toggle('active');
}

function flipCard() {
  const card = document.getElementById('card');
  card.classList.toggle('flipped');
}

// -------------------
// Part 3: Event Listeners
// -------------------

// Trigger box animation
document.getElementById('animateBtn').addEventListener('click', toggleBoxAnimation);

// Trigger card flip
document.getElementById('card').addEventListener('click', flipCard);

// Example function with parameters & return
function calculateSum(a, b) {
  return a + b;
}
console.log("Sum of 5 + 10 =", calculateSum(5, 10));
