import { readFile } from "fs/promises";
import { createHash } from "crypto";
import getPath from "../utils/index.js";

const pathToFile = getPath.getSourceFilePath(
  import.meta.url,
  "fileToCalculateHashFor.txt"
);

const calculateHash = async () => {
  const fileContent = await readFile(pathToFile);
  const hex = createHash("sha256").update(fileContent).digest("hex");
  process.stdout.write(hex)
};

await calculateHash();
