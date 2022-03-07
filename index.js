// console.log(process.argv);

const playerAction = process.argv[process.argv.length - 1];
let computerAction;
console.log("playerAction:", playerAction);

const random = Math.random() * 3;
if (random < 1) {
	computerAction = "rock";
} else if (random > 2) {
	computerAction = "scissor";
} else {
	computerAction = "paper";
}
console.log("computerAction:", computerAction);

if (computerAction === playerAction) {
	console.log("平局");
} else if (
	(computerAction === "rock" && playerAction === "paper") ||
	(computerAction === "scissor" && playerAction === "rock") ||
	(computerAction === "paper" && playerAction === "scissor")
) {
	console.log("你赢了");
} else {
	console.log("你输了");
}

// test input: node index.js rock
