import React, { useState } from 'react';
// useState - function

const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler);

  const [headline, setHeadline] = useState('meat balls');

  const handleClick = () => {
    if(headline === 'meat balls'){

      setHeadline('Hello');
    }else{
      setHeadline('meat balls');

    }
  }

  return (
    <React.Fragment>
      <h1>{headline}</h1>
      <button className="btn" onClick={handleClick}>Change Title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
