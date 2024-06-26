import Link from "next/link";
import { Bevan } from "next/font/google";
import { BlogItem, BlogQueryResult } from "@/app/types";
import { createClient } from "contentful";
import Template from "./template";
import Breadcrumb from "@/app/components/Breadcrumb";
import PolaroidCard from '@/app/components/PolaroidCard';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const bevan = Bevan({
  subsets: ["latin"],
  weight: "400",
});

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
});

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const queryOptions = {
    content_type: "blog",
    select: "fields.slug",
  };

  const articles = await client.getEntries(queryOptions);
  return articles.items.map((article) => ({
    slug: article.fields.slug,
  }));
}

const fetchBlogPost = async (slug: string): Promise<BlogItem> => {
  const queryOptions = {
    content_type: "blog",
    "fields.slug[match]": slug,
  };
  const queryResult = await client.getEntries(queryOptions);
  return queryResult.items[0];
};

export default async function BlogPage(props: BlogPageProps) {
  const { params } = props;
  const { slug } = params;
  const article = await fetchBlogPost(slug);
  const { title, date, content, media } = article.fields;

  return (
    <Template>
      <Breadcrumb
        homeElement={"Home"}
        separator={<span> - </span>}
        activeClasses="ml-2"
        containerClasses="flex flex-col justify-center text-center items-center py-5"
        listClasses="hover:underline mr-2 font-bold"
        capitalizeLinks
      />
      <main className="min-h-screen flex justify-center">
        <div className="max-w-2xl">
          <hr className="border-t-[#333] dark:border-yellow-100 border-2 border-dotted" />
          <h1 className={`font-extrabold text-3xl mb-2 ${bevan.className} text-center`}>{title}</h1>

          <p className="mb-6 text-[#444] dark:text-yellow-100 italic text-center">
            Posted on{" "}
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <PolaroidCard />
          <article className={`[&>p]:mb-8 [&>h2]:font-extrabold [&>h2]:text-center [&>h2]:uppercase dropcap`}>
            {documentToReactComponents(content, media)}
          </article>
          <hr className="border-t-[#333] dark:border-yellow-100 border-2 border-dotted" />
        </div>
      </main>
    </Template>
  );
}
