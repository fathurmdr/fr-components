import React from "react";

function Button(props) {
  const { title, type, onClick, className } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg bg-slate-500 py-1.5 px-3 text-center font-medium text-white hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-1 ${className}`}
    >
      {title}
    </button>
  );
}

export default Button;
