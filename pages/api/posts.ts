import { NextApiHandler } from "next";
import matter from "gray-matter";
import path from "path";
import fs from "fs";

const handler: NextApiHandler = (req, res) => {
  //   console.log(req.method); // GET

  const { method } = req;

  //postman으로 테스트 가능
  switch (method) {
    case "GET": {
      const data = readPostsInfo();
      return res.json({ postInfo: data });
    }
    default:
      return res.status(404).send("Not Found");
  }
};

const readPostsInfo = () => {
  const dirPathToRead = path.join(process.cwd(), "posts");
  const dirs = fs.readdirSync(dirPathToRead);
  const data = dirs.map((filename) => {
    const filePathToRead = path.join(process.cwd(), "posts/" + filename);
    const fileContent = fs.readFileSync(filePathToRead, { encoding: "utf-8" });
    return matter(fileContent).data;
  });

  return data;
};

export default handler;
