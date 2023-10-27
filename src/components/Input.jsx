import React, { useId } from "react";

//forward ref is used when you create only one input in one place but us used it in another place
const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  //reference always passed
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block pl-1 mb-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});
export default Input;
