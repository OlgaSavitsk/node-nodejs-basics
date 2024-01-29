import { readdir } from "fs/promises";
import path from "path";
import getPath from "../utils/index.js";
import { ERROR_MESSAGE } from "../constants/index.js";

const __dirname = getPath.getDirName(import.meta.url);
const sourceFolderPath = path.join(__dirname, "files");

const list = async () => {
  try {
    const folderList = await readdir(sourceFolderPath);
    console.log(folderList);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await list();
