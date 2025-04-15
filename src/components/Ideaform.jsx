import React from 'react';
import Fieldset from './fieldset.jsx';
import Market from './Market.jsx';
import Complexity from './Complexity.jsx';
import Demand from './Demand.jsx';
import Revenue from './Revenue.jsx';




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
          <h3>Complexity, Demand, Revenue</h3>
          <Complexity />
          <Demand />
          <Revenue />
          
          {/* <label htmlFor="complexity" name="complexity" multiple />
          <select name="complexity" id="complexity">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
          </select>
          <label htmlFor="demand" name="demand" multiple />
          <select name="demand" id="demand">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
          </select>
          <label htmlFor="revenue" name="revenue" multiple />
          <select name="revenue" id="revenue">
              <option value="low">$ Low</option>
              <option value="medium">$$ Medium</option>
              <option value="high">$$$ High</option>
          </select> */}
      <input type="text" id="test" />
      {/* <input type=""> */}
      <button type="submit">Add Task</button>
    </form>
  );
}


export default Ideaform;
