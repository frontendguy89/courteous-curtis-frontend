import Link from "next/link";
import { Bevan } from "next/font/google";
import { BlogItem } from "@/app/types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
import Breadcrumb from "../components/Breadcrumb";
import PolaroidCard from "../components/PolaroidCard";

const bevan = Bevan({
  subsets: ["latin"],
  weight: "400",
});

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
});

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
  const { title, date, content } = article.fields;

  return (
    <>
      <Breadcrumb
        homeElement={"Home"}
        separator={<span> / </span>}
        activeClasses="ml-2"
        containerClasses="flex py-5"
        listClasses="hover:underline mr-2 font-bold"
        capitalizeLinks
      />
      <main className="min-h-screen flex justify-center">
        <div className="max-w-2xl">
          <Link className="group" href={`/articles/${slug}`}>
            <h1
              className={`font-extrabold text-3xl mb-2 uppercase ${bevan.className}`}
            >
              {title}
            </h1>
          </Link>
          <p className="mb-6 text-[#666] ">
            Posted on{" "}
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <article
            className={`[&>h2]:font-extrabold [&>h2]:${bevan.className}`}
          >
            {documentToReactComponents(content)}
          </article>
        </div>
      </main>
    </>
  );
}
