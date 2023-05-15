import { InferGetStaticPropsType, NextPage } from "next";
import BlogCard from "../components/BlogCard";
import { useEffect, useState } from "react";

interface PostApiRespose {
  postInfo: {
    title: string;
    slug: string;
    meta: string;
  }[];
}
export const getStaticProps = async () => {
  const { postInfo }: PostApiRespose = await fetch(
    "http://localhost:3000/api/posts"
  ).then((data) => data.json());

  return {
    props: { posts: postInfo },
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blogs: NextPage<Props> = ({ posts }) => {
  return (
    <div className="max-w-3xl mx-auto p-5 space-y-5">
      {posts.map((post, index) => (
        <BlogCard key={index} title={post.title} desc={post.meta} />
      ))}
    </div>
  );
};

export default Blogs;
