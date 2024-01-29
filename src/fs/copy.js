import { copyFile, mkdir, readdir, stat } from "fs/promises";
import path from "path";
import getPath from "../utils/index.js";
import { ERROR_MESSAGE } from "../constants/index.js";

const __dirname = getPath.getDirName(import.meta.url);
const sourceFolderPath = path.join(__dirname, "files");
const destinationPath = path.join(__dirname, "files_copy");

const copy = async (source = sourceFolderPath, target = destinationPath) => {
  try {
    if ((await stat(source)).isDirectory()) {
      await mkdir(target);
      const files = await readdir(source, { withFileTypes: true });
      await Promise.all(
        files.map((file) =>
          copy(path.join(source, file.name), path.join(target, file.name))
        )
      );
    } else {
      await copyFile(source, target);
    }
  } catch{
    throw new Error(ERROR_MESSAGE);
  }
};

await copy();
