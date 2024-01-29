import { fork } from "child_process";
import getPath from "../utils/index.js";

const pathToFile = getPath.getSourceFilePath(import.meta.url, "script.js");

const spawnChildProcess = async (args) => {
  fork(pathToFile, args);
};

spawnChildProcess(["someArgument", 1]);
