import { rename as renameFile } from "fs/promises";
import getPath from "../utils/index.js";
import { ERROR_MESSAGE } from "../constants/index.js";

const sourceFilePath = getPath.getSourceFilePath(import.meta.url, "wrongFilename.txt");
const pathToNewFile =getPath.getSourceFilePath(import.meta.url, "properFilename.md");

const rename = async () => {
  try {
    await renameFile(sourceFilePath, pathToNewFile);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await rename();
