import { writeFile } from "fs/promises";
import getPath from "../utils/index.js";
import { CONTENT, ERROR_MESSAGE } from "../constants/index.js";

const pathToFile = getPath.getSourceFilePath(import.meta.url, "fresh.txt");

const create = async () => {
  try {
    await writeFile(pathToFile, CONTENT, { flag: "wx" });
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await create();
