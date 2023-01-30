const messageModule = require("./messages");
messageModule.messages.forEach(m => console.log(m));

const addNum = require("./try");
console.log(addNum.addNum(2, 3));