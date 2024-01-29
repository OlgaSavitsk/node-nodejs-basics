import { createReadStream } from "fs";
import getPath from "../utils/index.js";

const pathToFile = getPath.getSourceFilePath(import.meta.url, "fileToRead.txt");

const readableStream = createReadStream(pathToFile);

const read = async () => {
  readableStream.pipe(process.stdout);
};

await read();
