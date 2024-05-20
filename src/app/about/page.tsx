import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";
import Heart from "../components/anatomy/Heart";

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

      <Heart />
      <h1 className="text-4xl">&#9891;</h1>
    </>
  );
}
