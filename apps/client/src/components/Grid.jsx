import Card from "./Card";
import Modal from "./Modal";

import { AiOutlinePlus } from "react-icons/ai";

export default function Grid() {
  return (
    <>
      <div className="flex justify-between my-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Explore
        </h2>
        <button
          type="button"
          data-hs-overlay="#create-story"
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        >
          <AiOutlinePlus className="inline" />
          <span className="hidden sm:inline">Write your own story</span>
        </button>
        <Modal title={"Create Story"} id={"create-story"} />
      </div>
      <div>
        <Card />
      </div>
    </>
  );
}
