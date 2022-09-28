import React from "react";

function Inputs(props) {
  const {
    title,
    id,
    type,
    value,
    onChange,
    prefix,
    placeholder,
    prefixClass,
    inputClass,
    containerClass,
  } = props;
  return (
    <>
      <label htmlFor={id} className="block py-2 text-slate-800">
        {title}
      </label>
      <div
        className={`box-border flex items-stretch overflow-hidden rounded-md border  text-slate-600   focus-within:border-slate-500 
         focus-within:outline-none focus-within:ring-1 focus-within:ring-slate-500 ${containerClass}`}
      >
        {prefix && (
          <div
            className={`border-r bg-slate-50 px-3 py-2 outline-none ${prefixClass}`}
          >
            {prefix}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className={`w-full  bg-white p-2 outline-none ${inputClass}`}
        />
      </div>
    </>
  );
}

export default Inputs;
