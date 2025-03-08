// import React from 'react';

// export const Tabs = ({ children }) => (
//   <div className="tabs">{children}</div>
// );

// export const TabsList = ({ children }) => (
//   <div className="tabs-list">{children}</div>
// );

// export const TabsTrigger = ({ children, onClick }) => (
//   <button className="tabs-trigger" onClick={onClick}>
//     {children}
//   </button>
// );

// export const TabsContent = ({ children }) => (
//   <div className="tabs-content">{children}</div>
// );


// export default Tabs;

import React, { createContext, useContext, useState } from 'react';

// Create context for tabs
const TabsContext = createContext({
  value: '',
  onValueChange: () => {},
});

const Tabs = ({ 
  defaultValue, 
  value, 
  onValueChange,
  children, 
  className = "",
  ...props 
}) => {
  const [tabValue, setTabValue] = useState(defaultValue || '');
  
  const currentValue = value !== undefined ? value : tabValue;
  const handleValueChange = onValueChange || setTabValue;

  return (
    <TabsContext.Provider value={{ value: currentValue, onValueChange: handleValueChange }}>
      <div
        className={`tabs ${className}`}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const TabsList = ({ 
  children, 
  className = "",
  ...props 
}) => {
  return (
    <div
      role="tablist"
      className={`tabs-list ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const TabsTrigger = ({ 
  value,
  children, 
  className = "",
  ...props 
}) => {
  const { value: selectedValue, onValueChange } = useContext(TabsContext);
  const isSelected = selectedValue === value;

  return (
    <button
      role="tab"
      aria-selected={isSelected}
      data-state={isSelected ? "active" : "inactive"}
      className={`tabs-trigger ${isSelected ? 'tabs-trigger-active' : ''} ${className}`}
      onClick={() => onValueChange(value)}
      {...props}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ 
  value,
  children, 
  className = "",
  ...props 
}) => {
  const { value: selectedValue } = useContext(TabsContext);
  const isSelected = selectedValue === value;

  if (!isSelected) return null;

  return (
    <div
      role="tabpanel"
      data-state={isSelected ? "active" : "inactive"}
      className={`tabs-content ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
