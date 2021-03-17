// Only change code below this line
function logicOrder(num) {
    if(num < 50) {
        return "Less than 50";
    } else if (num < 100) {
  return "Less then 100";
    } else {
    return "Grater than or equal to 100";
    }
}
console.log(logicOrder(28));
console.log(logicOrder(60));
console.log(logicOrder(110));
// Only change code below this line
module.exports = logicOrder;