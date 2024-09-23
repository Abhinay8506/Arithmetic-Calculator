import React, { useState } from "react";
import "./App.css";
function App() {
  const [input,setInput] =  useState('');

  const handleClick=(e)=>{
    const value=e.target.value;
    if(value === 'C'){
      setInput('');
    }else if (value === '=') {
     
        setInput(eval(input)); // Evaluate the expression////////////////
      }else{
      setInput(input+value);
    }

  };
  return (
    <>
      <div className="calci">
        <div className="calci-input">
          <input type="text" value={input} placeholder="enter" />
        </div>
        <div className="calci-button">
          <div className="calci-button-noperator">
            <button value="C" onClick={handleClick}>C</button>
            <button value="7" onClick={handleClick}>7</button>
            <button value="8" onClick={handleClick}>8</button>
            <button value="9" onClick={handleClick}>9</button>
            <button value="=" onClick={handleClick}>=</button>
            <button value="4" onClick={handleClick}>4</button>
            <button value="5" onClick={handleClick}>5</button>
            <button value="6" onClick={handleClick}>6</button>
            <button value="0" onClick={handleClick}>0</button>
            <button value="1" onClick={handleClick}>1</button>
            <button value="2" onClick={handleClick}>2</button>
            <button value="3" onClick={handleClick}>3</button>
          </div>
          <div className="calci-button-operator">
            <button value="+" onClick={handleClick}>+</button>
            <button value="-" onClick={handleClick}>-</button>
            <button value="*" onClick={handleClick}>*</button>
            <button value="/" onClick={handleClick}>/</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
