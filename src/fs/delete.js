import { unlink } from "fs";

const remove = async () => {
  unlink("./src/fs/files/fileToRemove.txt", (error) => {
    if (error) {
      throw new Error("FS operation failed");
    }

    return console.log("Success!");
  });
};

await remove();
