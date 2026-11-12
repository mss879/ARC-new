import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { GUIDE_YEAR, companyCount } from "./page-data";

/* Share image for /software-companies-sri-lanka, generated at build time at a true
 * 1200×630. The count and year come from page-data.ts, so it never goes stale. */

export const alt = `Software Companies in Sri Lanka: ${companyCount} firms compared (${GUIDE_YEAR})`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "rgb(255,73,37)";

export default async function OpengraphImage() {
    const flarex = await readFile(join(process.cwd(), "public", "flarex.otf"));

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#000",
                    color: "#fff",
                    padding: "64px 72px",
                }}
            >
                <div style={{ display: "flex", fontSize: 26, letterSpacing: 3, color: ACCENT }}>
                    ARC AI · INDUSTRY GUIDE
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", fontFamily: "Flarex", fontSize: 88, lineHeight: 1.05 }}>
                        Software Companies
                    </div>
                    <div style={{ display: "flex", fontFamily: "Flarex", fontSize: 88, lineHeight: 1.05 }}>
                        in Sri Lanka
                    </div>
                    <div style={{ display: "flex", marginTop: 28, fontSize: 42, color: ACCENT }}>
                        {`${companyCount} firms compared · ${GUIDE_YEAR}`}
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#a3a3a3" }}>
                    <span>Size · specialty · type · ratings · sources</span>
                    <span>arcai.agency</span>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [{ name: "Flarex", data: flarex, weight: 700, style: "normal" }],
        }
    );
}
