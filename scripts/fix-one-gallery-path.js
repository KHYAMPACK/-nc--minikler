const fs = require("fs");
const actual = fs
  .readdirSync("public/galeri")
  .find((f) => f.includes("669646398"));
let g = fs.readFileSync("src/lib/gallery.ts", "utf8");
const wrong = g.match(/SnapInsta\.to_669646398_[^"]+\.jpg/);
console.log("wrong", wrong && wrong[0]);
console.log("actual", actual);
if (wrong && actual && wrong[0] !== actual) {
  g = g.replace(wrong[0], actual);
  fs.writeFileSync("src/lib/gallery.ts", g);
  console.log("fixed");
} else {
  console.log("no change needed or already equal", wrong && wrong[0] === actual);
}
