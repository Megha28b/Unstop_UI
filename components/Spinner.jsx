import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div
        className="w-16 h-16 rounded-full animate-spin
                   border-6 border-solid border-[var(--color-primary)] border-t-transparent"
      ></div>
    </div>
  );
};

export default Spinner;
