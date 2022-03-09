console.log("Hello");

exports.hello = "test hello"; // 定义一个模块输出的方式

exports.add = function (a, b) {
	return a + b;
};

module.exports = function minus(a, b) {
	return a - b;
};

setTimeout(() => {
	console.log(exports);
}, 0);
