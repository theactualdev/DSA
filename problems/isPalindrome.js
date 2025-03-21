var isPalindrome = function (s) {
    if (!s.length) return true;
    const value = s.split('').filter(x => x == '0' || Number(x) || x.toLowerCase() !== x.toUpperCase()).join('')?.toLowerCase();
    const reverseValue = value.split('').reverse().join('')
    return value == reverseValue;
};