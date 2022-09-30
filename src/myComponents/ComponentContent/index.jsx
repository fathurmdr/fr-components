import React from "react";
import { useState } from "react";

function ComponentContent(props) {
  const { title } = props;
  const [isPreview, setIsPreview] = useState(true);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <div>{title}</div>
        <div className="flex text-sm">
          <button
            onClick={() => setIsPreview(true)}
            className={`mr-2 rounded-md border px-2.5 py-1.5 ${
              isPreview && "bg-slate-500 text-slate-100"
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => setIsPreview(false)}
            className={`mr-2 rounded-md border px-2.5 py-1.5 ${
              !isPreview && "bg-slate-500 text-slate-100"
            }`}
          >
            Usage
          </button>
        </div>
      </div>
      {props.children(isPreview)}
    </div>
  );
}

export default ComponentContent;
