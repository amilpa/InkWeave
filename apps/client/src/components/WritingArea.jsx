import React, { useEffect, useState } from "react";

import Page from "./Page";

export default function WritingArea() {
  const [newPage, setNewPage] = useState(false);
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div>
      {/* <button onClick={savePage}>| save page</button> */}
      <div className="pt-16">
        <Page
          setNewPage={setNewPage}
          newPage={newPage}
          txt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </div>
    </div>
  );
}
