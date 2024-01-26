import { createWriteStream } from "fs";

const write = async () => {
  const writableStream = createWriteStream(
    "./src/streams/files/fileToWrite.txt"
  );

  process.stdin.on("data", (data) => {
    writableStream.write(data);
  });
};

await write();
