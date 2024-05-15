import { Bevan } from "next/font/google";

const bevan = Bevan({
  subsets: ["latin"],
  weight: "400",
});

export default function Page() {
  return (
    <>
      <h1 className={`${bevan.className} text-3xl text-center`}>
        Penny for your thoughts?
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat nisi
        dignissimos illo facilis, in eaque modi quasi molestias? Non consectetur
        dignissimos numquam esse iure neque quae perspiciatis dolore sed
        cupiditate?
      </p>
      <form className="max-w-[40rem] m-auto flex flex-col">
        <label className="font-bold">Name:</label>
        <input className="border-2 border-[#333] px-2 py-1" type="text" />
      </form>
    </>
  );
}
