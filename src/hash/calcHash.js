import { createHash } from "crypto";
import { readFile, createReadStream } from "fs";

const calculateHash = async () => {
  const readStream = createReadStream(
    "./src/hash/files/fileToCalculateHashFor.txt", { highWaterMark: 10 }
  );

  readStream.on("data", (chunk) => {
    const hash = createHash("sha256");
    const finalHex = hash.update(chunk.toString()).digest("hex");

    console.log(`${finalHex}\n`);
  });
};

await calculateHash();
