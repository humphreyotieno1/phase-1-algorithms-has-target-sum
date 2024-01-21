function hasTargetSum(array, target) {
  const seenNumbers = new Set();

  for (let i = 0; i < array.length; i++) {
    const currentNumber = array[i];
    const difference = target - currentNumber;

    if (seenNumbers.has(difference)) {
      // Found a pair
      return true;
    }

    seenNumbers.add(currentNumber);
  }

  // No pair found
  return false;
}

/* 
   Time complexity: O(n)
   Space complexity: O(n)
*/

/* 
Pseudocode:
  1. Create an empty set to store the numbers we have seen so far.
  2. Iterate through the array.
  3. For each number in the array, calculate the difference between the target and the current number.
  4. Check if the difference is already in the set. If yes, return true (we found a pair).
  5. If the difference is not in the set, add the current number to the set.
  6. If the loop completes without finding a pair, return false.
*/

/*
  The hasTargetSum function uses a set to efficiently check 
  if there exists a pair of numbers in an array that adds up to a 
  specified target value. It iterates through the array, 
  maintaining a set of seen numbers. For each number, it 
  calculates the required complementary value needed to reach the target. 
  If this complementary value is found in the set, the function 
  returns true, indicating the presence of a pair. If the loop completes 
  without finding a pair, the function returns false. The algorithm has a 
  time complexity of O(n), where n is the array length, and a space 
  complexity of O(n) due to the set. The function is tested with 
  diverse scenarios to ensure its correctness.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
