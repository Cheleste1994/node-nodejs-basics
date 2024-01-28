import { Worker, isMainThread } from "worker_threads";
import { cpus } from "os";

const numCores = cpus().length;

const resultWorkers = [];

const performCalculations = async () => {
  const workers = [];

  for (let i = 0; i < numCores; i++) {
    const worker = new Worker("./src/wt/worker.js", { workerData: i + 10 });

    worker.on("message", (result) => {
      resultWorkers.push(result);
    });

    worker.on("error", (result) => {
      resultWorkers.push(result);
    });

    workers.push(worker);
  }

  Promise.all(
    workers.map(
      (worker) => new Promise((resolve) => worker.on("exit", resolve))
    )
  ).then(() => {
    console.table(resultWorkers);
  });
};

if (isMainThread) {
  await performCalculations();
}
