const glob = require("glob");

/**
 * 阻塞 io 的调用 例子
 */
// var result = null;
// console.time("glob");
// result = glob.sync(__dirname + "/**/*"); // 通过 console.time 和 console.timeEnd 可以打出这个语句在 nodejs 里的耗时
// console.timeEnd("glob");
// console.log(result);

/**
 * 非阻塞 io 的调用 例子
 */
var result = null;
console.time("glob");
glob(__dirname + "/**/*", function (err, res) {
	result = res;
	console.log("got result", result);
});
console.timeEnd("glob");
console.log(1 + 1);

// glob: 1.736ms
// 2      // 在 glob 执行过程中也可以进行其他操作
// got result
