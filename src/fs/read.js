import { readFile } from "fs/promises";
import getPath from "../utils/index.js";
import { ERROR_MESSAGE } from "../constants/index.js";

const sourceFilePath = getPath.getSourceFilePath(import.meta.url, "fileToRead.txt");

const read = async () => {
  try {
    const fileContent = await readFile(sourceFilePath, "utf8");
    console.log(fileContent);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await read();
