import React from "react";
import Fieldset from "./fieldset";
import Ideaform from "./ideaform";

const Market = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    };
    
    return (
        <form id="todo-form" onSubmit={handleSubmit}>
       
            <label htmlFor="market" name="market" multiple />
                <select name="market" id="market">
                    <option value="small">Small</option>
                    <option value="smallmedium">Small to Medium</option>
                    <option value="medium">Medium</option>
                    <option value="mediumlarge">Medium to Large</option>
                    <option value="large">Large</option>
            </select>
      
        </form>
    );
}
export default Market;