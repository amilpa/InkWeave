import React, { useState } from "react";
import { Editor } from "novel";
import { AiOutlinePlus } from "react-icons/ai";

export default function Page({ txt, newPage, setNewPage }) {
  //default value
  const defaultContent = {
    type: "doc",
    content: [],
  };

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  function seeDetails() {}
  function editPage() {
    //creates an <editor> component within the page and
    //adds to current page
  }
  function addPage() {
    if (!newPage) setNewPage(true);
    setPgCount(pgCount + 1);
  }

  function deletePage() {}
  return (
    <>
      <div
        className="relative min-h-[500px] mx-auto mb-8 p-6 w-full max-w-screen-lg bg-gray-800 border-stone-200 sm:rounded-lg sm:border sm:shadow-lg"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {/* {isHovering && (
        <div>
          <button onClick={seeDetails}></button>
          <button onClick={editPage}></button>
        </div>
      )} */}
        <div className="text-lg">{txt}</div>
        <button
          onClick={addPage}
          type="button"
          className="absolute bottom-8 right-8 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
        >
          <AiOutlinePlus />
        </button>
      </div>
      {newPage && (
        <Editor
          className="relative min-h-[500px] w-full max-w-screen-lg text-white border-stone-200 bg-gray-800 sm:mx-auto sm:mb-8 sm:rounded-lg sm:border sm:shadow-lg"
          defaultValue={defaultContent}
          extensions={[]}
        />
      )}
    </>
  );
}
