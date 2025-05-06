import React from "react";
import { v4 as uuidv4 } from "uuid";

// for passing data to parent component using forwardRef hook
const Input = React.forwardRef(function Input(
  { label, placeholder, type = "text", className = "", ...props },
  ref
) {
  const id = uuidv4();
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className={`font-serif text-sm py-2`}>
          {label}
        </label>
      )}

      <input
        type={type}
        ref={ref}
        id={id}
        {...props}
        className={`focus:outline-none rounded-md hover:border-indigo-900 ${className}`}
        onFocus={(e) => (e.target.placeholder = "")}
      />
    </div>
  );
});

export default Input;
