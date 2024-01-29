import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { pipeline } from "stream";
import getPath from "../utils/index.js";

const pathToFile = getPath.getSourceFilePath(import.meta.url, "archive.gz");
const pathToOutputFile = getPath.getSourceFilePath(
  import.meta.url,
  "fileToCompress.txt"
);

const input = createReadStream(pathToFile);
const output = createWriteStream(pathToOutputFile);

const decompress = async () => {
  await pipeline(input, createGunzip(), output, (err) => {
    console.log(err);
  });
};

await decompress();
