// Builds round logo badges for the "Trusted by" strip from the original brand
// files. Each logo is trimmed, fitted inside a disc and saved as a 256 px WebP.
// Run from the website folder so `sharp` resolves from its node_modules.
const path = require("path");
const { createRequire } = require("module");
const sharp = createRequire(process.cwd() + "/")("sharp");

const D = "/Users/shahidshamir/Desktop";
const OUT = process.argv[2];
const SIZE = 256;
const LIGHT = "#ffffff";
const DARK = "#111111";

// [file name, source, disc colour, inner box as a share of the disc, "asis" = already a badge]
const LOGOS = [
  ["armac-mart", `${D}/Flow State/promo-video/public/armac/brand/logo.png`, LIGHT, 0.7],
  ["imperial-life-sciences", `${D}/Azam-company/Imperial Life Sciences/public/logo.webp`, LIGHT, 0.74],
  ["cloud-healthcare", `${D}/Azam-company/cloud-main/public/brand/logo-mark.png`, LIGHT, 0.62],
  ["iconn-health-care", `${D}/Azam-company/iconnhealthcare.org/public/logo.png`, LIGHT, 0.72],
  ["inventis-pharma", `${D}/Azam-company/inventispharma.org/public/logo-1.png`, LIGHT, 0.74],
  ["lusako", `${D}/Drinking-water/public/brand/lusako-mark.svg`, LIGHT, 0.5],
  ["fusion-hybrid", `${D}/Fusion-hybrid/public/logo-mark.png`, LIGHT, 0.6],
  ["green-engineering-systems", `${D}/GES.lk/public/brand/ges-logo.png`, LIGHT, 0.74],
  ["makro-developers", `${D}/Makro Devalopers/makro-developers/public/logo-black.png`, LIGHT, 0.74],
  ["md-lanka", `${D}/Md-Lanka-final/assets-raw/images/md-logo-wb.png`, LIGHT, 0.62],
  ["aec", `${D}/australian-edu-inst/public/auseducenter_logo.png`, LIGHT, 0.68],
  ["dock-one-solutions", `${D}/azam-bro/public/brand/dock-one-mark.svg`, DARK, 0.6],
  ["gharib-perfumes", `${D}/dubai-perfume/public/logo.png`, LIGHT, 0.72],
  ["franley", `${D}/franley-tie/public/brand/mark.png`, DARK, 0.58],
  ["pluggedin", `${D}/Pluggedin/public/logo.webp`, LIGHT, 0.74],
  ["iris-and-me", `${D}/iris/public/img/logo-cream.png`, DARK, 0.72],
  ["island-adventures", `${D}/island-adventures/public/photos/brand/logo-f4c92888-720.webp`, null, 1, "asis"],
  ["island-jerky", `${D}/island-jerky/docs/design-assets/official-logo-red-transparent.png`, LIGHT, 0.8],
  ["java-global-nexus", `${D}/javagnp-2.ae-master/public/favicon.png`, null, 1, "asis"],
  ["ceylon-gem-maison", `${D}/jewelery/public/main-logo.png`, LIGHT, 0.74],
  ["jollys-creamery", `${D}/jolly-final/public/images/brand/logo.png`, LIGHT, 0.66],
  ["mr-rider", `${D}/mr-rider-main/public/logo.png`, DARK, 0.7],
  ["portland-flooring", `${D}/portland-main/public/portland-logo.png`, null, 1, "asis"],
  ["royal-paradise-gems", `${D}/royal-paradise/public/brand/logo-mark.png`, DARK, 0.62],
  ["tech-nurture", `${D}/technature/logo.png`, null, 1, "asis"],
];

const disc = (fill) =>
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}"><circle cx="${SIZE / 2}" cy="${SIZE / 2}" r="${SIZE / 2}" fill="${fill}"/></svg>`);
const mask = disc("#fff");

(async () => {
  for (const [name, src, fill, share, mode] of LOGOS) {
    try {
      let badge;
      if (mode === "asis") {
        const art = await sharp(src, { density: 300 }).resize(SIZE, SIZE, { fit: "cover" }).png().toBuffer();
        badge = sharp(art).composite([{ input: mask, blend: "dest-in" }]);
      } else {
        const box = Math.round(SIZE * share);
        const trimmed = await sharp(src, { density: 600 }).trim().toBuffer();
        const art = await sharp(trimmed)
          .resize(box, box, { fit: "inside", background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .png()
          .toBuffer();
        badge = sharp(disc(fill)).composite([{ input: art, gravity: "centre" }]);
      }
      const out = path.join(OUT, `${name}.webp`);
      const info = await badge.webp({ quality: 90 }).toFile(out);
      console.log("ok ", name.padEnd(28), `${info.width}x${info.height}`, `${(info.size / 1024).toFixed(1)} KB`);
    } catch (error) {
      console.log("FAIL", name, String(error.message).slice(0, 120));
    }
  }

  // Contact sheet on the site's black background, for a visual check.
  const names = LOGOS.map(([name]) => name);
  const cols = 7, cell = 150, pad = 14;
  const rows = Math.ceil(names.length / cols);
  const tiles = await Promise.all(
    names.map(async (name, i) => ({
      input: await sharp(path.join(OUT, `${name}.webp`)).resize(cell - pad * 2, cell - pad * 2).png().toBuffer().catch(() => Buffer.alloc(0)),
      left: (i % cols) * cell + pad,
      top: Math.floor(i / cols) * cell + pad,
    })),
  );
  await sharp({ create: { width: cols * cell, height: rows * cell, channels: 3, background: "#000" } })
    .composite(tiles.filter((t) => t.input.length))
    .png()
    .toFile(path.join(OUT, "_sheet.png"));
  console.log("sheet written");
})();
