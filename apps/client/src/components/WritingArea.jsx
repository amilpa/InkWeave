import React, { useEffect } from "react";
import { Editor } from "novel";
import Page from "./Page";
import { useState } from "react";

import { AiOutlinePlus } from "react-icons/ai";

export default function WritingArea() {
  const [chapters, setChapters] = useState([[1, 1]]);
  useEffect(() => {
    localStorage.clear();
  }, []);
  const [pgCount, setPgCount] = useState(1);
  const defaultContent = {
    type: "doc",
    content: [],
  };

  const [pages, setPages] = useState([]);

  function addPage() {
    setPages((pages) => [
      ...pages,
      <Editor
        className="relative min-h-[500px] w-full max-w-screen-lg text-white border-stone-200 bg-gray-800 sm:mx-auto sm:mb-8 sm:rounded-lg sm:border sm:shadow-lg"
        defaultValue={defaultContent}
        extensions={[]}
      />,
    ]);
    setPgCount(pgCount + 1);
  }

  function savePage() {
    //get content from <editor> and place it in <page/>
    //then setPages() to add <page>
    //then remove the last <editor> page
  }
  return (
    <div>
      {/* <button onClick={savePage}>| save page</button> */}
      <div className="pt-16">
        <Page txt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.">
          <button
            onClick={addPage}
            type="button"
            className="absolute bottom-8 right-8 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          >
            <AiOutlinePlus />
          </button>
        </Page>
        {pages}
      </div>
    </div>
  );
}
