import { readdir } from "fs";

const PATH = "./src/fs/files";

const list = async () => {
  readdir(PATH, (error, files) => {
    if (error) {
      throw new Error("FS operation failed");
    }

    console.table(files);
  });
};

await list();
