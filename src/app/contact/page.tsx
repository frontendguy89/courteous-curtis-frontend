"use client";
import { Bevan } from "next/font/google";
import { Formik, Field, Form, FormikHelpers } from "formik";
import Breadcrumb from "../components/Breadcrumb";
import Coin from "../components/art/Coin";

const bevan = Bevan({
  subsets: ["latin"],
  weight: "400",
});

interface Values {
  Name: string;
  Email: string;
  Tel: string,
  Website: string,
  Message: string
}

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
      <Coin />
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
      <Formik
        initialValues={{
          Name: "",
          Email: "",
          Tel: "",
          Website: "",
          Message: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <form className="max-w-[40rem] m-auto flex flex-col gap-2 mb-6">
          <label htmlFor="Name" className="font-bold">
            Name:
          </label>
          <Field
            id="Name"
            name="Name"
            className="border-2 border-[#333] px-2 py-1 placeholder:text-[#333] bg-transparent active:bg-yellow-100 focus:bg-yellow-100"
            type="text"
            placeholder="E.A Poe"
            required
          />
          <label htmlFor="Email" className="font-bold">
            Email:
          </label>
          <Field
            id="Email"
            name="Email"
            className="border-2 border-[#333] px-2 py-1 placeholder:text-[#333] bg-transparent active:bg-yellow-100 focus:bg-yellow-100"
            type="email"
            placeholder="theraven@houseofusher.com"
            required
          />
          <label htmlFor="Tel" className="font-bold">
            Tel:
          </label>
          <Field
            id="Tel"
            name="Tel"
            className="border-2 border-[#333] px-2 py-1 placeholder:text-[#333] bg-transparent active:bg-yellow-100 focus:bg-yellow-100"
            type="tel"
            placeholder="+1(617)-555-1234"
          />
          <label htmlFor="Website" className="font-bold">
            Website:
          </label>
          <Field
            id="Website"
            name="Website"
            className="border-2 border-[#333] px-2 py-1 placeholder:text-[#333] bg-transparent active:bg-yellow-100 focus:bg-yellow-100"
            type="url"
            placeholder="https://houseofusher.com"
          />
          <label htmlFor="Message" className="font-bold">
            Message:
          </label>
          <Field
            as="textarea"
            id="Message"
            name="Message"
            className="border-2 border-[#333] px-2 py-1 placeholder:text-[#333] bg-transparent active:bg-yellow-100 focus:bg-yellow-100"
            placeholder="And the Masque of the Red Death held sway over all&hellip;"
            rows={6}
            required
          ></Field>
          <div className="flex gap-2">
            <button
              className="bg-[#111] hover:bg-[#333] px-2 py-2 text-yellow-50"
              value="submit"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </Formik>
      <hr className="border-t-[#333] border-2 border-dotted" />
    </>
  );
}
