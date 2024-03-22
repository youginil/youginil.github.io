import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { spawnSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.resolve(ROOT, "docs");
const DST_DIR = path.resolve(ROOT, "dist/docs");
const books = fs.readdirSync(SRC_DIR);

function buildBook(name) {
    console.log("Build", name);
    process.chdir(path.resolve(SRC_DIR, name));
    const result = spawnSync("mdbook", [
        "build",
        "-d",
        path.resolve(DST_DIR, name),
    ]);
    if (result.error) {
        throw result.error;
    }
}

const book = process.argv[2];
if (book) {
    if (books.includes(book)) {
        buildBook(book);
    } else {
        console.error(`Invalid book: ${book}`);
    }
} else {
    for (let i = 0; i < books.length; i++) {
        buildBook(books[i]);
    }
}
