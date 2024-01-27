import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";

const decompress = async () => {
  const inputFile = createReadStream("./src/zip/files/archive.gz");
  const outputFile = createWriteStream("./src/zip/files/fileToCompress.txt");

  inputFile.pipe(createUnzip()).pipe(outputFile);
};

await decompress();
