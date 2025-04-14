import React from 'react';
import Fieldset from './fieldset.jsx';

<form id="todo-form">
  <input type="text" id="todo-input" placeholder="Enter new task" required />
  <label htmlFor="market" name="market" multiple />
  <select name="market" id="market">
    <option value="small">Small</option>
    <option value="smallmedium">Small to Medium</option>
    <option value="medium">Medium</option>
    <option value="mediumlarge">Medium to Large</option>
    <option value="large">Large</option>
  </select>
  <div className="catlist">
    <Fieldset />
    </div>
  <input type="text" id="test" />
  {/* <input type=""> */}
  <button type="submit">Add Task</button>
</form>

export default Ideaform;
