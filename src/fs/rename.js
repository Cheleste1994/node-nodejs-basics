import { rename as renameFs, readdir } from "fs";
import { parse } from "path";

const PATH = "./src/fs/files";

const rename = async () => {
  readdir(PATH, (error, files) => {
    if (error) {
      throw new Error("FS operation failed");
    }

    if (
      !files.includes("wrongFilename.txt") ||
      files.includes("properFilename.md")
    ) {
      throw new Error("FS operation failed");
    }

    files.forEach((file) => {
      const { name, ext } = parse(`${PATH}/${file}`);

      if (name === "wrongFilename") {
        if (ext === ".txt") {
          renameFs(`${PATH}/${file}`, `${PATH}/properFilename.md`, (error) => {
            if (error) {
              throw new Error("FS operation failed");
            }
          });
        }
      }
    });

    return console.log("Success!");
  });
};

await rename();
