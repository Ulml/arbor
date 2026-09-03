const goal = (typeof process !== "undefined" && process.argv.slice(2).join(" ")) || "brief";
const outline = ["Contexte", "Faits", "Décision", "Prochaine action"];
console.log(JSON.stringify({ goal, outline }));
