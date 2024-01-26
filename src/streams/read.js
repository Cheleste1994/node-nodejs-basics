import { createReadStream } from "fs";

const read = async () => {
  createReadStream("./src/streams/files/fileToRead.txt").pipe(process.stdout);
};

await read();
