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
          
      {/* <label htmlFor="market" name="market" multiple />
      <select name="market" id="market">
        <option value="small">Small</option>
        <option value="smallmedium">Small to Medium</option>
        <option value="medium">Medium</option>
        <option value="mediumlarge">Medium to Large</option>
        <option value="large">Large</option>
      </select> */}
      <div className="catlist">
        <Fieldset />
      </div>
      <input type="text" id="test" />
      {/* <input type=""> */}
      <button type="submit">Add Task</button>
    </form>
  );
}


export default Ideaform;
