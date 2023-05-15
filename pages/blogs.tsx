import { NextPage } from "next";
import BlogCard from "../components/BlogCard";

interface Props {}

const Blogs: NextPage<Props> = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 space-y-5">
      <BlogCard
        title="This is my blog"
        desc="consectetur adipisicing elit. Voluptatum, optio deserunt. Nihil
        consequatur doloremque alias reiciendis, ut ratione fugiat distinctio
        aliquam dolor dignissimos. Reprehenderit officia aliquid dolorum cum
        asperiores libero."
      />
      <BlogCard
        title="This is my blog"
        desc="consectetur adipisicing elit. Voluptatum, optio deserunt. Nihil
        consequatur doloremque alias reiciendis, ut ratione fugiat distinctio
        aliquam dolor dignissimos. Reprehenderit officia aliquid dolorum cum
        asperiores libero."
      />
    </div>
  );
};

export default Blogs;
