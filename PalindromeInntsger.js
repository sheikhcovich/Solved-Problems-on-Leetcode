var isPalindrome = function (x = -120) {
  s = x.toString();
  let i = 0;
  let j = s.length - 1;
  while (i <= j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
};
