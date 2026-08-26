import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const html = await readFile(resolve(root, "index.html"), "utf8");
const ogImage = await readFile(resolve(root, "public/og.png"));
const serverDir = resolve(root, "dist/server");

await mkdir(serverDir, { recursive: true });

const worker = `
const page = ${JSON.stringify(html)};
const ogBase64 = ${JSON.stringify(ogImage.toString("base64"))};

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

    if (url.pathname === "/og.png") {
      return new Response(request.method === "HEAD" ? null : decodeBase64(ogBase64), {
        headers: {
          "content-type": "image/png",
          "cache-control": "public, max-age=604800, immutable"
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
