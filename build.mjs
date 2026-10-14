import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { extname, resolve } from "node:path";

const root = process.cwd();
const html = await readFile(resolve(root, "index.html"), "utf8");
const ogImage = await readFile(resolve(root, "public/og.png"));
const workData = await readFile(resolve(root, "data.js"));
const assets = {
  "/og.png": { type: "image/png", base64: ogImage.toString("base64") },
  "/data.js": { type: "text/javascript; charset=utf-8", base64: workData.toString("base64") }
};
const imageTypes = { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp" };
for (const name of await readdir(resolve(root, "assets"))) {
  const type = imageTypes[extname(name).toLowerCase()];
  if (!type) continue;
  assets["/assets/" + name] = { type, base64: (await readFile(resolve(root, "assets", name))).toString("base64") };
}
const serverDir = resolve(root, "dist/server");

await mkdir(serverDir, { recursive: true });

const worker = `
const page = ${JSON.stringify(html)};
const assets = ${JSON.stringify(assets)};

function decodeBase64(value) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", { status: 405 });
    }

    if (Object.hasOwn(assets, url.pathname)) {
      const asset = assets[url.pathname];
      return new Response(request.method === "HEAD" ? null : decodeBase64(asset.base64), {
        headers: {
          "content-type": asset.type,
          "cache-control": "public, max-age=300"
        }
      });
    }

    if (url.pathname === "/" || url.pathname === "/index.html") {
      const body = page.replaceAll("__SITE_ORIGIN__", url.origin);
      return new Response(request.method === "HEAD" ? null : body, {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "public, max-age=300"
        }
      });
    }

    return new Response("Not found", { status: 404 });
  }
};
`;

await writeFile(resolve(serverDir, "index.js"), worker);
console.log("Built dist/server/index.js");
