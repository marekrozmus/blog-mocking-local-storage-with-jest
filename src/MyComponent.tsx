import React from 'react';

const MyComponent = () => {
  const handleGetData = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    localStorage.getItem('mydata');
  };

  const handleSetData = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    localStorage.setItem('mydata', 'myvalue');
  };

  const handleRemoveData = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    localStorage.removeItem('mydata');
  };

  return (
    <div>
      <button onClick={handleGetData}>Get data</button>
      <button onClick={handleSetData}>Set data</button>
      <button onClick={handleRemoveData}>Remove data</button>
    </div>
  );
};

export default MyComponent;