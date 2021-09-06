const messages = [
  'Oscar',
  'Ana',
  "Carolina",
  "Pauline",
  'Nikolai',
  'Jessica',
  'Diego',
  'Laura'
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
}

export default {randomMsg}