import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";

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
        src="/anatomical_heart.svg"
        alt="skull"
        width="160"
        height="160"
        className="text-center m-auto"
      />
      <h1 className="text-4xl">&#9891;</h1>
    </>
  );
}
