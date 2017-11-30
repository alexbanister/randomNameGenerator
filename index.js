const adjectives = require('./adjectives');
const nouns = require('./nouns');

const generateRandomName = () => {
  const noun = nouns[Math.floor(Math.random() * nouns.length - 1)];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length - 1)];
  return `${adjective} ${noun}`;
};

module.exports = generateRandomName;
