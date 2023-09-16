import React, { useState } from "react";

export default function Page(txt) {
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
  function deletePage(){}
  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {isHovering && (
        <div>
          <button onClick={seeDetails}></button>
          <button onClick={editPage}></button>
        </div>
      )}
      <div>{txt}</div>
    </div>
  );
}
