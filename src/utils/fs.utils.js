import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

export const getDirName = (url) => dirname(fileURLToPath(url));

export const getSourceFilePath = (url, fileName) => {
  const __dirName = getDirName(url);
  const sourceFilePath = path.join(__dirName, "files", fileName);
  return sourceFilePath;
};
