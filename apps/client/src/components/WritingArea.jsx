/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import Page from "./Page";

export default function WritingArea({ chapterNo }) {
  const [newPage, setNewPage] = useState({ id: 0 });

  const [pages, setPages] = useState([
    {
      pgNo: 1,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      pgNo: 2,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ]);

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div>
      {/* <button onClick={savePage}>| save page</button> */}
      <div className="pt-16">
        <h1 className="text-xl font-semibold ml-28 mb-8">
          Chapter : {chapterNo}
        </h1>
        {pages.map((item) => {
          return (
            <Page
              key={item.pgNo}
              newPage={newPage}
              setNewPage={setNewPage}
              content={item.content}
              pgNo={item.pgNo}
            />
          );
        })}
      </div>
    </div>
  );
}
