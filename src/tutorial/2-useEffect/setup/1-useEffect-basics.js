import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('call useEffect',value);
    if(value>=1){
      document.title = `New Messages (${value})`
    }else{
      document.title = `React App`;
    }
  },[value])
  console.log('render component',value);
  return <>
  <h1>{value}</h1>
  <button className="btn" onClick={()=>{setValue(value+1)}}>click me</button>
  <button className="btn" onClick={()=>{setValue(value-1)}}>reduce me</button>
  <button className="btn" onClick={()=>{setValue(0)}}>Reset me</button>
  </>;

};

export default UseEffectBasics;
