import fs from "fs";
import path from "path";
import matter from "gray-matter";
const postsDirectory = path.join(process.cwd(), "docs");
console.log(postsDirectory);

export function getDocuments() {
  try {
    console.log(postsDirectory);
    if (!fs.existsSync(postsDirectory)) {
      throw new Error(`Directory ${postsDirectory} does not exist`);
    }

    const fileNames = fs.readdirSync(postsDirectory);
    console.log("File Names: ", fileNames);
    return fileNames;
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
}
