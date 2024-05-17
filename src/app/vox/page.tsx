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
      <h1 className={`${bevan.className} text-3xl text-center uppercase`}>
        I like the sound of my own voice&hellip;
      </h1>
    </>
  );
}
