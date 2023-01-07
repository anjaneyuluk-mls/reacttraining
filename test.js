function removeDuplicates(arr) {
  const uniqueObj = {};
  arr.forEach((element) => {
    if (!uniqueObj[element]) {
      uniqueObj[element] = true;
    }
  });
  return Object.keys(uniqueObj);
}
const uniqArray = removeDuplicates([1, 1, 3, 4, 3, 7, 7]);
console.log({ uniqArray });

function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
const factorialValue = factorial(6);
console.log({ factorialValue });

function isPalindrome(str) {
  let reverseStr = '';
  for (let index = str.length - 1; index >= 0; index--) {
    const char = str[index];
    reverseStr = reverseStr + char;
  }
  return reverseStr === str;
}
console.log('is Madadm palindrome', isPalindrome('madam'));
console.log('is Sir palindrome', isPalindrome('sir'));


