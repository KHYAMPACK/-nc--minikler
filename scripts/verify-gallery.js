const fs = require("fs");
const g = fs.readFileSync("src/lib/gallery.ts", "utf8");
const srcs = [...g.matchAll(/src: `\/galeri\/\$\{file\}`/g)];
const files = [...g.matchAll(/"([a-z0-9-]+\.jpg)"/g)].map((m) => m[1]);
const unique = [...new Set(files)];
const missing = unique.filter((f) => !fs.existsSync("public/galeri/" + f));
console.log("files", unique.length, "missing", missing.length);
if (missing.length) console.log(missing.join("\n"));
