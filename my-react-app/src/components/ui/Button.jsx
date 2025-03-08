// import React from 'react';

// export const Button = ({ children, onClick }) => (
//   <button className="btn" onClick={onClick}>
//     {children}
//   </button>
// );

// export default Button;

// import React from 'react';


// const Button = ({ 
//   children, 
//   className = "", 
//   variant = "default", 
//   size = "default",
//   ...props 
// }) => {
//   return (
//     <button
//       className={`button button-${variant} button-${size} ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// export { Button };

import React, { useState } from 'react';

const Button = ({ 
  children, 
  className = "", 
  variant = "default", 
  size = "default",
  ...props 
}) => {
  const [label, setLabel] = useState(children); // Initialize the label state with the initial children (button text)

  const handleClick = () => {
    if (label === "Admit") {
      setLabel("Admitted"); // Change the button text to "Admitted"
    }
  };

  return (
    <button
      className={`button button-${variant} button-${size} ${className}`}
      onClick={handleClick} // Trigger the handleClick function when the button is clicked
      {...props}
    >
      {label}
    </button>
  );
};

export { Button };
