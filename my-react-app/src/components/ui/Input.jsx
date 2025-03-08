// import React from 'react';

// export const Input = ({ value, onChange, placeholder }) => (
//   <input
//     className="input"
//     value={value}
//     onChange={onChange}
//     placeholder={placeholder}
//   />
// );

// export default Input;


import React from 'react';

const Input = React.forwardRef(({ 
  className = "", 
  type = "text", 
  ...props 
}, ref) => {
  return (
    <input
      type={type}
      className={`input ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };