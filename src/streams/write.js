import { createWriteStream } from "fs";
import getPath from "../utils/index.js";

const pathToFile = getPath.getSourceFilePath(
  import.meta.url,
  "fileToWrite.txt"
);

const writableStream = createWriteStream(pathToFile, { flags: "a" });

const write = async () => {
  process.stdin.pipe(writableStream);
};

await write();
