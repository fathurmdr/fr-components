import React from "react";

function ButtonPrimary(props) {
  const { title, type, onClick } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-lg bg-blue-500 py-1.5 px-3 text-center text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-1"
    >
      {title}
    </button>
  );
}

export default ButtonPrimary;
