import { unlink } from "fs/promises";
import getPath from "../utils/index.js";
import { ERROR_MESSAGE } from "../constants/index.js";

const sourceFilePath = getPath.getSourceFilePath(
  import.meta.url,
  "fileToRemove.txt"
);

const remove = async () => {
  try {
    await unlink(sourceFilePath);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await remove();
