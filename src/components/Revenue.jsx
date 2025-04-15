import React from "react";
import Fieldset from "./fieldset";
import Ideaform from "./ideaform";

const Revenue = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    };
    
    return (
        <form id="todo-form" onSubmit={handleSubmit}>
       
            <label htmlFor="revenue" name="revenue" multiple />
            <select name="revenue" id="revenue">
                <option value="low">$ Low</option>
                <option value="medium">$$ Medium</option>
                <option value="high">$$$ High</option>
            </select>
      
        </form>
    );
}
export default Revenue;