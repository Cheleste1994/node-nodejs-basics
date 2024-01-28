import { parentPort, workerData } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (data) => {
  const result = nthFibonacci(data);

  if (Math.random() < 0.5) {
    return parentPort.postMessage({ status: "error", data: null });
  }

  parentPort.postMessage({ status: "resolved", data: result });
};

sendResult(workerData);
