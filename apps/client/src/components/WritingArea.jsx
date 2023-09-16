import React from "react";
import { Editor } from "novel";
import Page from "./Page";
import { useState } from "react";
export default function WritingArea() {
  const [chapters, setChapters] = useState([[1, 1]]);

  const [pages, setPages] = useState([
    <Editor
      className="relative min-h-[500px] w-full max-w-screen-lg border-stone-200 bg-white sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg"
      defaultValue="Begin your story here"
      extensions={[]}
    />,
  ]);

  const [pgCount, setPgCount] = useState(1);

  function addPage() {
    setPages((pages) => [
      ...pages,
      <Editor
        className="relative min-h-[500px] w-full max-w-screen-lg border-stone-200 bg-white sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg"
        defaultValue="Begin your story here"
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
      <button onClick={addPage}>add page |</button>
      <button onClick={savePage}>| save page</button>
      <div>{pages.slice()}</div>
    </div>
  );
}
