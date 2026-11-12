/* Request every URL the pillar page cites and report the ones that do not load.
 *
 * Usage: node scripts/check-pillar-links.mjs src/app/software-companies-sri-lanka
 * Run it before every update of the guide (see the monthly upkeep list in docs/seo).
 *
 * "blocked" (401/403/429/999) means the site refuses automated requests; those pages
 * usually load in a browser, so they are reported separately from "dead" links.
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const pillar = process.argv[2];
const { companies } = await import(pathToFileURL(path.resolve(pillar, "company-list.ts")).href);

const targets = [];
const add = (owner, field, url) => { if (url) targets.push({ owner, field, url }); };
for (const c of companies) {
    add(c.name, "website", c.website);
    add(c.name, "careers", c.careersUrl);
    add(c.name, "internship", c.internshipUrl);
    add(c.name, "rating", c.rating?.url);
    add(c.name, "employeeRating", c.employeeRating?.url);
    add(c.name, "clutch", c.clutch?.url);
    add(c.name, "project", c.project?.sourceUrl);
    add(c.name, "headcount", c.slHeadcount?.sourceUrl);
    for (const s of c.sources) add(c.name, `source: ${s.label}`, s.url);
}
const pageData = fs.readFileSync(path.join(pillar, "page-data.ts"), "utf8");
for (const m of pageData.matchAll(/(\w+): \{ label: "([^"]+)", url: "([^"]+)" \}/g)) add("page", `SOURCES.${m[1]}`, m[3]);
for (const m of pageData.matchAll(/^\s+url: "(https?:[^"]+)"/gm)) add("page", "snapshot", m[1]);

const unique = new Map();
for (const t of targets) unique.set(t.url, [...(unique.get(t.url) || []), `${t.owner} (${t.field})`]);

const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";
async function check(url) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 25000);
    try {
        const res = await fetch(url, { redirect: "follow", signal: ctrl.signal, headers: { "User-Agent": UA, Accept: "text/html,application/xhtml+xml,*/*;q=0.8", "Accept-Language": "en" } });
        return { status: res.status, finalUrl: res.url };
    } catch (e) {
        return { status: 0, error: e.cause?.code || e.name || String(e) };
    } finally {
        clearTimeout(timer);
    }
}

const urls = [...unique.keys()];
const results = new Map();
let i = 0;
await Promise.all(Array.from({ length: 10 }, async () => {
    while (i < urls.length) {
        const url = urls[i++];
        let r = await check(url);
        if (r.status === 0 || r.status >= 500) r = await check(url); // one retry
        results.set(url, r);
    }
}));

const blockedCodes = new Set([401, 403, 405, 406, 429, 999]);
const dead = [], blocked = [], ok = [];
for (const [url, r] of results) {
    if (r.status >= 200 && r.status < 400) ok.push(url);
    else if (blockedCodes.has(r.status)) blocked.push({ url, r });
    else dead.push({ url, r });
}
console.log(`${urls.length} unique links: ${ok.length} ok, ${blocked.length} refuse automated requests, ${dead.length} failed`);
const host = (u) => { try { return new URL(u).host; } catch { return u; } };
const blockedHosts = {};
for (const b of blocked) blockedHosts[host(b.url)] = (blockedHosts[host(b.url)] || 0) + 1;
console.log("refusing hosts:", Object.entries(blockedHosts).sort((a, b) => b[1] - a[1]).map(([h, n]) => `${h} ×${n}`).join(", "));
for (const d of dead) console.log(`FAILED ${d.r.status || d.r.error} | ${d.url} | ${unique.get(d.url).join("; ")}`);
