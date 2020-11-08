import { render } from "@testing-library/react";
import React from "react";

const ErrorExample = () => {
  let title = "Spaghetti";
  const handleClick = () => {
    title = 'Meat Balls';
    console.log(title);
  }
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>Change Title</button>
    </React.Fragment>
  );
};

export default ErrorExample;
