import Image from "next/image";

export default function PolaroidCard() {
    return(
        <figure className="border-4 border-[#333] py-2 px-2 w-60 m-auto shadow-md shadow-[#333] bg-parchment bg-cover bg-center">
            <Image src="/dublin.jpg" alt="Dublin" height="6183" width="4122" className="w-full h-auto m-auto sepia" />
            <figcaption className="text-center uppercase py-2 font-bold">Image</figcaption>
        </figure>
    )
}