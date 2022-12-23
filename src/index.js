module.exports = function reverse (n) {
let numStr = Math.abs(n).toString();
let res = "";

for (let i = numStr.length -1; i >= 0; i--) {
    res += numStr[i];
}
return Number(res);
}
