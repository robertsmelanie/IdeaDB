import React from 'react';
import Fieldset from './fieldset.jsx';
import Market from './Market.jsx';


const Ideaform = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <form id="todo-form" onSubmit={handleSubmit}>
          <input type="text" id="todo-input" placeholder="Enter new task" required />
          

          <Market />

     
      <div className="catlist">
        <Fieldset />
          </div>
          
          <label htmlFor="complexity" name="complexity" multiple />
          <select name="complexity" id="complexity">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
          </select>
      <input type="text" id="test" />
      {/* <input type=""> */}
      <button type="submit">Add Task</button>
    </form>
  );
}


export default Ideaform;
