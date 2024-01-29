import { Worker } from "worker_threads";
import { cpus } from "os";
import path from "path";
import getPath from "../utils/index.js";

const pathToFile = path.join(getPath.getDirName(import.meta.url), "worker.js");

const performCalculations = async () => {
  const numCPUs = cpus();
  const promiseArr = numCPUs.map(
    (_, index) =>
      new Promise((resolve) => {
        const worker = new Worker(pathToFile, {
          workerData: 10 + index,
        });
        worker.on("message", (msg) => {
          resolve({ status: "resolved", data: msg });
        });
        worker.on("error", () => {
          resolve({ status: "error", data: null });
        });
      })
  );
  const result = await Promise.all(promiseArr);
  console.log(result);
};

await performCalculations();
