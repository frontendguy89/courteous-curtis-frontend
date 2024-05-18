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
        separator={<span> - </span>}
        activeClasses="ml-2"
        containerClasses="flex py-5"
        listClasses="hover:underline mr-2 font-bold"
        capitalizeLinks
      />
      <h1 className={`${bevan.className} text-3xl text-center uppercase`}>
        Penny for your thoughts?
      </h1>
      <hr className="border-t-[#333] border-2 border-dotted mb-6" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nisi
        dignissimos illo facilis, in eaque modi quasi molestias? Non consectetur
        dignissimos numquam esse iure neque quae perspiciatis dolore sed
        cupiditate?
      </p>
      <form className="max-w-[40rem] m-auto flex flex-col gap-2 mb-6">
        <label className="font-bold">Name:</label>
        <input
          className="border-2 border-[#333] px-2 py-1 placeholder:text-[#333] bg-transparent"
          type="text"
          placeholder="E.A Poe"
        />
        <label className="font-bold">Email:</label>
        <input
          className="border-2 border-[#333] px-2 py-1 placeholder:text-[#333] bg-transparent"
          type="email"
          placeholder="theraven@houseofusher.com"
        />
        <label className="font-bold">Tel:</label>
        <input
          className="border-2 border-[#333] px-2 py-1 placeholder:text-[#333] bg-transparent"
          type="tel" placeholder="+1(617)-555-1234"
        />
        <label className="font-bold">Website:</label>
        <input
          className="border-2 border-[#333] px-2 py-1 placeholder:text-[#333] bg-transparent"
          type="url"
          placeholder="https://houseofusher.com"
        />
        <label className="font-bold">Message:</label>
        <textarea
          className="border-2 border-[#333] px-2 py-1 placeholder:text-[#333] bg-transparent"
          placeholder="And the Masque of the Red Death held sway over all&hellip;" rows="3"
        ></textarea>
        <div className="flex gap-2">
          <button
            className="bg-[#111] hover:bg-[#333] px-2 py-2 text-yellow-50"
            value="submit"
          >
            SUBMIT
          </button>
          <button
            className="bg-transparent hover:bg-yellow-50 border-2 border-[#333] px-2 py-2"
            value="reset"
          >
            RESET
          </button>
        </div>
      </form>
      <hr className="border-t-[#333] border-2 border-dotted" />
    </>
  );
}
