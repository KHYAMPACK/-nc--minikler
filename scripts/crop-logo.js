const sharp = require("sharp");
const fs = require("fs");

const src =
  "C:/Users/Mert/.cursor/projects/c-Users-Mert-OneDrive-Desktop-Projects-Client-Projects-nc-minikler-kre/assets/c__Users_Mert_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-897bb67b-f9dd-4f6c-813c-88b7a714b124.png";

(async () => {
  const m = await sharp(src).metadata();
  console.log("source", m.width, m.height);

  // Left avatar crop from IG top strip
  const left = 12;
  const top = 8;
  const s = Math.min(m.height - 16, 220);
  await sharp(src)
    .extract({ left, top, width: s, height: s })
    .resize(512, 512)
    .png()
    .toFile("public/logo.png");

  await sharp("public/logo.png").resize(192, 192).png().toFile("public/icon.png");
  await sharp("public/logo.png").resize(48, 48).png().toFile("public/icon-48.png");
  await sharp("public/logo.png")
    .resize(180, 180)
    .png()
    .toFile("public/apple-icon.png");

  // Clean unused create-next-app assets
  for (const f of [
    "public/next.svg",
    "public/vercel.svg",
    "public/globe.svg",
    "public/file.svg",
    "public/window.svg",
    "public/logo-raw.png",
    "public/logo-circle.png",
  ]) {
    if (fs.existsSync(f)) fs.unlinkSync(f);
  }

  console.log("ok", s);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
