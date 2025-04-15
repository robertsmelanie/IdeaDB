import React from "react";
import Fieldset from "./fieldset";
import Ideaform from "./ideaform";


const Complexity = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    };
    
    return (
        <form id="todo-form" onSubmit={handleSubmit}>
       
        
            <label htmlFor="complexity" name="complexity" multiple />
            <select name="complexity" id="complexity">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
      
        </form>
    );
}
export default Complexity;