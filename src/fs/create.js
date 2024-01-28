import { writeFile, readFile } from "fs";

const PATH = "src/fs/fresh.txt";

const create = async () => {
  readFile(PATH, (error) => {
    if (error) {
      writeFile(PATH, "I am fresh and young", (error) => {
        if (error) {
          throw new Error(error);
        }
      });
      return console.log("File created!");
    }
    throw new Error("FS operation failed");
  });
};

await create();
