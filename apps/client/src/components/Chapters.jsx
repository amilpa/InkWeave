import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Chapters() {
  const chapters = [
    {
      id: 1,
      timestamp: "2021-10-10",
    },
    {
      id: 2,
      timestamp: "2021-10-10",
    },
    {
      id: 3,
      timestamp: "2021-10-10",
    },
  ];

  useEffect(() => {
    // fetch
  }, []);

  return (
    <div className="flex flex-col gap-3 mt-8">
      {chapters.map((value) => {
        return (
          <Link
            to={{ pathname: "/editor", state: { chapterNo: value.id } }}
            key={value.id}
            className="flex justify-between px-6 border border-gray-400"
          >
            <p>Chapter {value.id}</p>
            <p>{value.timestamp}</p>
          </Link>
        );
      })}
    </div>
  );
}
