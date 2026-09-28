import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
test("portfolio contains required cases", async () => { const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8"); for (const text of ["数字手账空间","猫哥学建筑","低空视角","BaiduStreetViewSpider","portfolio-zhaoyiwei.pdf"]) assert.match(page, new RegExp(text)); });
