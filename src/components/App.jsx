import React, { useState } from "react";

function App() {
   const [inputText, setInputText] = useState("");
   const [list, setList] = useState([]);

   function handleChange(event){
      const newVal = event.target.value; 
      setInputText(newVal);
   };

   function addItem(event){
      event.preventDefault();
      setList((prevItems)=>{
         return [...prevItems, inputText]
      });
      setInputText("");
   };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} placeholder="Enter the task"/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item, idx)=>(
            <li key={idx}>{item}</li> 
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
