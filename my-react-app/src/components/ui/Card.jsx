// import React from 'react';

// export const Card = ({ children }) => (
//   <div className="card">{children}</div>
// );

// export const CardContent = ({ children }) => (
//   <div className="card-content">{children}</div>
// );

// export const CardDescription = ({ children }) => (
//   <p className="card-description">{children}</p>
// );

// export const CardHeader = ({ children }) => (
//   <div className="card-header">{children}</div>
// );

// export const CardTitle = ({ children }) => (
//   <h3 className="card-title">{children}</h3>
// );

// export default Card;


import React from 'react';

const Card = ({ 
  children, 
  className = "",
  ...props 
}) => {
  return (
    <div
      className={`card ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ 
  children, 
  className = "",
  ...props 
}) => {
  return (
    <div
      className={`card-header ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardTitle = ({ 
  children, 
  className = "",
  ...props 
}) => {
  return (
    <h3
      className={`card-title ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};

const CardDescription = ({ 
  children, 
  className = "",
  ...props 
}) => {
  return (
    <p
      className={`card-description ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

const CardContent = ({ 
  children, 
  className = "",
  ...props 
}) => {
  return (
    <div
      className={`card-content ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { Card, CardHeader, CardTitle, CardDescription, CardContent };