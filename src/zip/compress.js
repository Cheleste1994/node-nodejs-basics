import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";

const compress = async () => {
    const inputFile = createReadStream('./src/zip/files/fileToCompress.txt');
    const outputFile = createWriteStream('./src/zip/files/archive.gz');

    inputFile.pipe(createGzip()).pipe(outputFile);
};

await compress();
