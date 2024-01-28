import { readdir, mkdir, writeFile, readFile } from "fs";

const copy = async () => {
  readdir("./src/fs/files", (error, files) => {
    if (error) {
      throw new Error('FS operation failed');
    }

    mkdir("./src/fs/files_copy", (error) => {
      if (error) {
        throw new Error('FS operation failed');
      }
    });

    files.forEach((file) => {
      readFile(`./src/fs/files/${file}`, (error, data) => {
        if (error) {
          throw new Error(error);
        }

        writeFile(`./src/fs/files_copy/${file}`, data, (error) => {
          if (error) {
            throw new Error(error);
          }
        });
      });
    });

    return console.log("Success!");
  });
};

await copy();
