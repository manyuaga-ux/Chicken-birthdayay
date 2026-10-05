// Falling emoji. Add or swap emoji in this list.
const EMOJI = ['🐔','🐣','🍗','🎉','🎂','🥳','🔥','✨','🥚'];

function rain(count = 40) {
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'fall';
    el.textContent = EMOJI[Math.floor(Math.random() * EMOJI.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = 1.5 + Math.random() * 2.5 + 'rem';
    el.style.animationDuration = 2.5 + Math.random() * 3 + 's';
    el.style.animationDelay = Math.random() * 1.2 + 's';
    document.body.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }
}

document.getElementById('rain').addEventListener('click', () => rain(50));
window.addEventListener('load', () => setTimeout(() => rain(25), 500));

// Edit these prophecies however you like.
const PROPHECIES = [
  'This year you will win an argument by being the loudest.',
  'A free meal is heading your way. Say yes.',
  'You will say "one more game" at least 40 times.',
  'Someone will call you Chicken in public. You will answer.',
  'Your group chat will peak at 3 AM.',
  'Sixteen is the year of main character energy.',
  'You will finally learn to parallel park. Maybe.',
  'Cake levels this week are looking dangerously high.',
  'Big glow up incoming. Sunglasses recommended.',
  'Bawk bawk. That is all the oracle has to say.'
];

const ball = document.getElementById('ball');
document.getElementById('oracle').addEventListener('click', () => {
  ball.textContent = PROPHECIES[Math.floor(Math.random() * PROPHECIES.length)];
  ball.classList.remove('pop');
  void ball.offsetWidth; // restart the animation
  ball.classList.add('pop');
  rain(12);
});
