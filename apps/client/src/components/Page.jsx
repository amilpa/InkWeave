import React, { useState } from "react";

export default function Page({ txt, children }) {
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
  function deletePage() {}
  return (
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
      {children}
    </div>
  );
}
