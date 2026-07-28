const sharp = require("sharp");

(async () => {
  const { data, info } = await sharp("public/logo.png")
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    // Near-black UI background → transparent
    if (r < 35 && g < 35 && b < 35) {
      data[i + 3] = 0;
    }
  }

  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile("public/logo.png");

  await sharp("public/logo.png").resize(192, 192).png().toFile("public/icon.png");
  await sharp("public/logo.png").resize(48, 48).png().toFile("public/icon-48.png");
  await sharp("public/logo.png")
    .resize(180, 180)
    .png()
    .toFile("public/apple-icon.png");

  console.log("transparent bg ok");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
