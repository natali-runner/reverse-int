module.exports = function reverse(n) {

// without reverse()

// const absNum = Math.abs(n);
// let str = String(absNum).split('').join('');

// return (str.charAt(2) < 1? "" : str.charAt(2)) + str.charAt(1) + str.charAt(0);

// with reverse()

return Math.abs(n).toString().split('').reverse().join('');

};


