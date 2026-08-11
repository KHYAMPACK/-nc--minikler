const fs = require("fs");
const g = fs.readFileSync("src/lib/gallery.ts", "utf8");
const srcs = [...g.matchAll(/src: "(\/galeri\/[^"]+)"/g)].map((m) => m[1]);
const missing = [];
let ok = 0;
for (const s of srcs) {
  if (fs.existsSync("public" + s)) ok++;
  else missing.push(s);
}
console.log("ok", ok, "missing", missing.length);
if (missing.length) console.log(missing.join("\n"));
