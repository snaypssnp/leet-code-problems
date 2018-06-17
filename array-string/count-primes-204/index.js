/*
 https://leetcode.com/problems/count-primes/

 Solution: https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 */
/**
 * @param {number} n
 * @return {number}
 */
function countPrimes(n) {
  const notPrime = new Array(n).fill(false);
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (notPrime[i]) {
      continue;
    }

    count++;

    for (let j = 2; j * i < n; j++) {
      notPrime[j * i] = true;
    }
  }

  return count;
}

console.log(countPrimes(10));
