export const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

export const isPalindrome = (str) => {
  const normalizedStr = str.replace(/\s+/g, '').toLowerCase();
  const reversedStr = normalizedStr.split('').reverse().join('');

  return normalizedStr === reversedStr;
};

export const containsSpecialCharacters = (input) => {
  const pattern = /[^a-zA-Z0-9\s+]/;
  return pattern.test(input);
};
