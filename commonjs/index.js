console.log("start require");
const lib = require("./lib.js");
console.log("end require", lib); // {}

lib.test = "test"; // 用于排查是否同一个引用，结果：是，即：外部也可以修改 exports 对象
