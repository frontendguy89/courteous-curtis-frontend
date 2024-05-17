import Image from "next/image";
import { Bevan } from "next/font/google";
import Breadcrumb from "../components/Breadcrumb";

const bevan = Bevan({
    subsets: ["latin"],
    weight: "400",
  });

export default function Page() {
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
      <Image
        src="/anatomy_front.svg"
        alt="anatomy"
        width="160"
        height="160"
        className="text-center m-auto"
      />
      <hr className="border-b-[#333] dark:border-yellow-100 border-2 border-dotted" />
      <h1
        className={`font-extrabold text-3xl text-center mb-2 uppercase ${bevan.className}`}
      >
        Sitemap
      </h1>
      <hr className="border-t-[#333] dark:border-yellow-100 border-2 border-dotted" />
    </>
  );
}
