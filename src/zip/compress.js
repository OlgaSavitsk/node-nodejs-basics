import { createReadStream, createWriteStream } from "fs";
import {createGzip} from "zlib";
import { pipeline } from "stream";
import getPath from "../utils/index.js";

const pathToFile = getPath.getSourceFilePath(
  import.meta.url,
  "fileToCompress.txt"
);
const pathToOutputFile = getPath.getSourceFilePath(
  import.meta.url,
  "archive.gz"
);

const input = createReadStream(pathToFile);
const output = createWriteStream(pathToOutputFile);

const compress = async () => {
  pipeline(input, createGzip(), output, (err) => {
    console.log(err);
  });
};

await compress();
