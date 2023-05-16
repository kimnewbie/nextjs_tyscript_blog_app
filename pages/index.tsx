import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Welcome to My Dev Blog</h1>
      <Link href='/blogs'>
        <p>Go to Blog</p>
      </Link>
      <Link href='/api/posts'>
        <p>See the api-posts</p>
      </Link>
    </>
  )
};

export default Home;
