// Builds the free-standing client logos for the hero's "Trusted by" strip:
// no circle or box around them, background removed, trimmed, and sized so a
// wide wordmark and a square mark carry about the same visual weight.
//
//   node scripts/make-free-logos.cjs <out-dir> [--sheet <png>]
//
// Writes <out-dir>/<file>.webp at twice the display size and
// src/lib/client-logos-free.ts with each logo's display width and height.
// Run from the website folder so `sharp` resolves from its node_modules.
//
// Sources, best first: the original brand files listed in
// make-logo-badges.cjs; for older clients, the 500 px squares in
// public/trust_backup; for a few, the existing wide files in public/logos.
//
// Logos that were drawn white for a dark background would vanish on the
// cream strip, so their white parts are switched to the site's ink colour.
const fs = require("fs");
const path = require("path");
const { createRequire } = require("module");
const sharp = createRequire(process.cwd() + "/")("sharp");

const OUT = process.argv[2];
const SHEET = process.argv.includes("--sheet") ? process.argv[process.argv.indexOf("--sheet") + 1] : null;
const ROOT = process.cwd();

// Display size: area-balanced, capped.
const MAX_H = 40;
const MAX_W = 120;
const AREA = 2400;
const SCALE = 2; // files are saved at twice the display size
const INK = [27, 26, 23];
// Logos whose solid background is part of the mark (a coloured block), so
// it is kept: only the empty space around it is trimmed.
const KEEP_BACKGROUND = new Set(["sponge-global"]);

// file name -> source. Anything not listed falls back to trust_backup, then
// to the existing file in public/logos.
const badgeScript = fs.readFileSync(path.join(ROOT, "scripts/make-logo-badges.cjs"), "utf8");
const D = "/Users/shahidshamir/Desktop";
const sources = {};
for (const m of badgeScript.matchAll(/\["([a-z0-9-]+)",\s*`\$\{D\}([^`]+)`/g)) sources[m[1]] = D + m[2];
const backupDir = path.join(ROOT, "public/trust_backup");
const backups = fs.existsSync(backupDir) ? fs.readdirSync(backupDir) : [];
for (const f of backups) {
  const key = f.replace(/\.png$/i, "").toLowerCase();
  if (!sources[key]) sources[key] = path.join(backupDir, f);
}
if (!sources.yboagency && backups.includes("Yboagency.png")) sources.yboagency = path.join(backupDir, "Yboagency.png");
if (!sources.zenzur && backups.includes("Zenzur.png")) sources.zenzur = path.join(backupDir, "Zenzur.png");

const logoList = fs.readFileSync(path.join(ROOT, "src/lib/client-logos.ts"), "utf8");
const files = [...logoList.matchAll(/file: "([^"]+)"/g)].map((m) => m[1]);

const lum = (r, g, b) => (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
const dist = (a, b) => Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2);

async function cutout(src, keepBackground) {
  const { data, info } = await sharp(src, { density: 600 })
    .resize(1200, 1200, { fit: "inside", withoutEnlargement: true })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height;
  const px = (i) => [data[i * 4], data[i * 4 + 1], data[i * 4 + 2], data[i * 4 + 3]];

  // Border: is it transparent already, or a solid background colour?
  const border = [];
  for (let x = 0; x < W; x++) border.push(x, (H - 1) * W + x);
  for (let y = 0; y < H; y++) border.push(y * W, y * W + W - 1);
  const clearBorder = border.filter((i) => data[i * 4 + 3] < 16).length / border.length;

  let bg = null;
  if (clearBorder < 0.6 && !keepBackground) {
    const opaque = border.filter((i) => data[i * 4 + 3] > 200).map(px);
    // Most common border colour, in coarse buckets.
    const buckets = new Map();
    for (const c of opaque) {
      const k = c.slice(0, 3).map((v) => v >> 4).join(",");
      const b = buckets.get(k) || { n: 0, sum: [0, 0, 0] };
      b.n++; b.sum[0] += c[0]; b.sum[1] += c[1]; b.sum[2] += c[2];
      buckets.set(k, b);
    }
    const top = [...buckets.values()].sort((a, b) => b.n - a.n)[0];
    bg = top.sum.map((v) => v / top.n);

    // Flood fill from the border: neighbours that are close to the pixel
    // they were reached from (follows a gradient) and not far from the
    // background colour.
    const isBg = new Uint8Array(W * H);
    const queue = [];
    for (const i of border) {
      const c = px(i);
      if (c[3] < 16 || dist(c, bg) < 60) { isBg[i] = 1; queue.push(i); }
    }
    while (queue.length) {
      const i = queue.pop();
      const x = i % W, y = (i / W) | 0;
      const c = px(i);
      for (const [nx, ny] of [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]]) {
        if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
        const j = ny * W + nx;
        if (isBg[j]) continue;
        const n = px(j);
        if (n[3] < 16 || (dist(n, c) < 14 && dist(n, bg) < 70)) { isBg[j] = 1; queue.push(j); }
      }
    }
    // Background goes clear; the first ring of artwork next to it gets a
    // soft edge, with the background colour taken back out of it.
    for (let i = 0; i < W * H; i++) {
      if (isBg[i]) { data[i * 4 + 3] = 0; continue; }
      const x = i % W, y = (i / W) | 0;
      let edge = false;
      for (const [nx, ny] of [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]]) {
        if (nx >= 0 && ny >= 0 && nx < W && ny < H && isBg[ny * W + nx]) { edge = true; break; }
      }
      if (!edge) continue;
      const c = px(i);
      const a = Math.min(1, Math.max(0.15, dist(c, bg) / 110));
      for (let k = 0; k < 3; k++) data[i * 4 + k] = Math.max(0, Math.min(255, bg[k] + (c[k] - bg[k]) / a));
      data[i * 4 + 3] = Math.round(c[3] * a);
    }
  }

  // White artwork made for a dark background: switch it to ink.
  let lumSum = 0, lumN = 0;
  for (let i = 0; i < W * H; i++) {
    if (data[i * 4 + 3] > 128) { lumSum += lum(data[i * 4], data[i * 4 + 1], data[i * 4 + 2]); lumN++; }
  }
  const meanLum = lumN ? lumSum / lumN : 0;
  const darkBg = bg && lum(...bg) < 0.35;
  const inked = darkBg || (!bg && meanLum > 0.8);
  if (inked) {
    for (let i = 0; i < W * H; i++) {
      const r = data[i * 4], g = data[i * 4 + 1], b = data[i * 4 + 2];
      const sat = Math.max(r, g, b) - Math.min(r, g, b);
      if (data[i * 4 + 3] > 0 && lum(r, g, b) > 0.72 && sat < 45) {
        data[i * 4] = INK[0]; data[i * 4 + 1] = INK[1]; data[i * 4 + 2] = INK[2];
      } else if (data[i * 4 + 3] > 0 && lum(r, g, b) > 0.6) {
        data[i * 4] = r * 0.72; data[i * 4 + 1] = g * 0.72; data[i * 4 + 2] = b * 0.72;
      }
    }
  }

  // The old square files have small marks in their corners (left over from
  // rounded corners). Anything that sits entirely inside a corner zone is
  // cleared before trimming.
  {
    const seen = new Uint8Array(W * H);
    const zx = Math.round(W * 0.07), zy = Math.round(H * 0.07);
    for (let start = 0; start < W * H; start++) {
      if (seen[start] || data[start * 4 + 3] <= 40) continue;
      const comp = [start];
      seen[start] = 1;
      let minX = W, minY = H, maxX = 0, maxY = 0;
      for (let k = 0; k < comp.length; k++) {
        const i = comp[k], x = i % W, y = (i / W) | 0;
        if (x < minX) minX = x; if (x > maxX) maxX = x; if (y < minY) minY = y; if (y > maxY) maxY = y;
        for (const [nx, ny] of [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]]) {
          if (nx < 0 || ny < 0 || nx >= W || ny >= H) continue;
          const j = ny * W + nx;
          if (!seen[j] && data[j * 4 + 3] > 40) { seen[j] = 1; comp.push(j); }
        }
      }
      const inCornerX = maxX < zx || minX > W - 1 - zx;
      const inCornerY = maxY < zy || minY > H - 1 - zy;
      if (inCornerX && inCornerY) for (const i of comp) data[i * 4 + 3] = 0;
    }
  }

  // Trim to the artwork. A row or column counts only if it holds more than
  // a few solid pixels, so stray specks (corner marks in the old square
  // files) are cropped away with the empty space.
  const rows = new Array(H).fill(0), cols = new Array(W).fill(0);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    if (data[(y * W + x) * 4 + 3] > 40) { rows[y]++; cols[x]++; }
  }
  const minRow = Math.max(3, Math.round(W * 0.006)), minCol = Math.max(3, Math.round(H * 0.006));
  let y0 = rows.findIndex((n) => n >= minRow), y1 = H - 1 - [...rows].reverse().findIndex((n) => n >= minRow);
  let x0 = cols.findIndex((n) => n >= minCol), x1 = W - 1 - [...cols].reverse().findIndex((n) => n >= minCol);
  // Keep the antialiased edge just outside the solid pixels.
  x0 = Math.max(0, x0 - 2); y0 = Math.max(0, y0 - 2); x1 = Math.min(W - 1, x1 + 2); y1 = Math.min(H - 1, y1 + 2);
  const raw = sharp(data, { raw: { width: W, height: H, channels: 4 } });
  const trimmed = await raw.extract({ left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 }).png().toBuffer();
  return { buffer: trimmed, w: x1 - x0 + 1, h: y1 - y0 + 1, bg: bg ? bg.map(Math.round) : "clear", inked };
}

function displaySize(w, h) {
  let s = Math.sqrt(AREA / (w * h));
  s = Math.min(s, MAX_H / h, MAX_W / w);
  return [Math.round(w * s), Math.round(h * s)];
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const sizes = {};
  const sheetTiles = [];
  for (const file of files) {
    const src = sources[file] && fs.existsSync(sources[file]) ? sources[file] : path.join(ROOT, "public/logos", `${file}.webp`);
    try {
      const art = await cutout(src, KEEP_BACKGROUND.has(file));
      const [dw, dh] = displaySize(art.w, art.h);
      const out = await sharp(art.buffer).resize(dw * SCALE, dh * SCALE, { fit: "fill" }).webp({ quality: 92, alphaQuality: 100 }).toBuffer();
      fs.writeFileSync(path.join(OUT, `${file}.webp`), out);
      sizes[file] = [dw, dh];
      sheetTiles.push({ file, buf: out, dw, dh });
      console.log("ok  ", file.padEnd(26), `${dw}x${dh}`, "bg", JSON.stringify(art.bg), art.inked ? "inked" : "", path.relative(D, src).slice(0, 60));
    } catch (error) {
      console.log("FAIL", file, String(error.message).slice(0, 120));
    }
  }

  const ts = `// Generated by scripts/make-free-logos.cjs: the display size (CSS px) of
// each free-standing logo in public/logos/free. Do not edit by hand.
export const freeLogoSizes: Record<string, readonly [number, number]> = ${JSON.stringify(sizes, null, 2).replace(/\[\n\s+(\d+),\n\s+(\d+)\n\s+\]/g, "[$1, $2]")};
`;
  fs.writeFileSync(path.join(ROOT, "src/lib/client-logos-free.ts"), ts);

  if (SHEET) {
    // The strip as it will look, on the cream, in rows.
    const rowW = 1400, pad = 28, rowH = 2 * MAX_H + 40;
    const comps = [];
    let x = pad, y = 20;
    for (const t of sheetTiles) {
      const w = t.dw * 2, h = t.dh * 2;
      if (x + w > rowW - pad) { x = pad; y += rowH; }
      comps.push({ input: t.buf, left: x, top: y + Math.round((2 * MAX_H - h) / 2) });
      x += w + 56;
    }
    await sharp({ create: { width: rowW, height: y + rowH, channels: 3, background: "#E8E6E0" } }).composite(comps).png().toFile(SHEET);
    console.log("sheet", SHEET);
  }
})();
