// import React from 'react';

// export const Progress = ({ value }) => (
//   <div className="progress">
//     <div
//       className="progress-bar"
//       style={{ width: `${value}%` }}
//     ></div>
//   </div>
// );

// export default Progress;


import React from 'react';

const Progress = ({ 
  value = 0, 
  max = 100, 
  className = "",
  ...props 
}) => {
  return (
    <div
      className={`progress ${className}`}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      {...props}
    >
      <div
        className="progress-indicator"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export { Progress };