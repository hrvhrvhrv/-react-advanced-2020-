import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const resetValue = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevValue)=>{
        if(prevValue === 10){
          return 50;
        }
        return prevValue + 1;
      })
    }, 2000);
  };

  return (
    <>
      <h2>useState counter example</h2>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
        <button className="btn" onClick={resetValue}>
          Reset
        </button>
      </section>
      <h2>useState counter example</h2>
      <section style={{ margin: "4rem 0" }}>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          Increase Later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
