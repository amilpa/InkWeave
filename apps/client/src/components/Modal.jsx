import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Modal({ id, title }) {
  const [validStoryName, setValidStoryName] = useState(false);
  const [validDescription, setValidDescription] = useState(false);
  const [storyName, setStoryName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div
      id={id}
      className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto bg-black/40"
    >
      <div className="hs-overlay-open:mt-24 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              {title}
            </h1>
            <div className="mt-5">
              <form>
                <div className="grid gap-y-4">
                  <div>
                    <label className="block text-sm mb-2 dark:text-white">
                      Story name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="project-name"
                        name="project-name"
                        className="py-3 px-4 block w-full border border-gray-400 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                        required
                        aria-describedby="project-name-error"
                        value={storyName}
                        onChange={(Event) => {
                          setStoryName(Event.target.value);
                        }}
                        onBlur={(Event) => {
                          if (storyName.length >= 5) setValidStoryName(true);
                          else setValidStoryName(false);
                        }}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        {!validStoryName && (
                          <svg
                            className="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    {!validStoryName && (
                      <p
                        className="block text-xs text-red-600 dark:text-red-400 mt-2"
                        id="email-error"
                      >
                        Please include a valid/unique story name.
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm mb-2 dark:text-white">
                      Description
                    </label>
                    <div className="relative">
                      <textarea
                        type="text"
                        id="project-name"
                        name="project-name"
                        className="h-44 py-3 px-4 block w-full border border-gray-400 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
                        required
                        aria-describedby="project-name-error"
                        value={description}
                        onChange={(Event) => {
                          setDescription(Event.target.value);
                        }}
                        onBlur={(Event) => {
                          if (description.trim().split(" ").length >= 50)
                            setValidDescription(true);
                          else setValidDescription(false);
                        }}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        {!validDescription && (
                          <svg
                            className="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    {!validDescription && (
                      <p
                        className="block text-xs text-red-600 dark:text-red-400 mt-2"
                        id="email-error"
                      >
                        Please include a valid/unique story name.
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="block text-sm mb-2 dark:text-white">
                      Upload cover image if any
                    </label>
                    <input type="file" className="text-white" />
                  </div>

                  <button
                    type="submit"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  >
                    Create project
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
