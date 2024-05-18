import Link from "next/link";
import Image from "next/image";
import { Bevan } from "next/font/google";
import { BlogQueryResult } from "@/app/types";
import { createClient } from "contentful";
import Breadcrumb from "../components/Breadcrumb";

const bevan = Bevan({
  subsets: ["latin"],
  weight: "400",
});

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
});

const getBlogEntries = async (): Promise<BlogQueryResult> => {
  const entries = await client.getEntries({ content_type: "blog" });
  return entries;
};

export default async function BlogPage() {
  const blogEntries = await getBlogEntries();

  return (
    <>
      <Breadcrumb
        homeElement={"Home"}
        separator={<span> - </span>}
        activeClasses="ml-2"
        containerClasses="flex text-center items-center py-5"
        listClasses="hover:underline mr-2 font-bold"
        capitalizeLinks
      />
      <main className="min-h-screen flex justify-center">
        <div className="max-w-2xl">
          <Image
            src="/simplebraindiagram.svg"
            alt="skull"
            width="160"
            height="160"
            className="text-center m-auto"
          />
          <h1
            className={`font-extrabold text-3xl text-center mb-2 uppercase ${bevan.className}`}
          >
            Read at your own risk&hellip;
          </h1>
          <p>
            Presented here are my articles, short stories and musings. Peruse at
            your own risk - sanity is for the weak
          </p>
          <hr className="border-t-[#333] dark:border-yellow-100 border-2 border-dotted" />
          {blogEntries.items.map((singlePost) => {
            const { slug, title, date } = singlePost.fields;
            return (
              <div key={slug} className="flex fle-row items-center justify-center gap-6">
                <Link href={`/articles/${slug}`}>
                  <h2 className={`text-3xl text-center ${bevan.className} uppercase`}>{title}</h2>
                  <span className="block text-center italic">
                    Posted on{" "}
                    {new Date(date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <br  />
                </Link>
              </div>
            );
          })}
          <hr className="border-t-[#333] dark:border-yellow-100 border-2 border-dotted" />
        </div>
      </main>
    </>
  );
}
