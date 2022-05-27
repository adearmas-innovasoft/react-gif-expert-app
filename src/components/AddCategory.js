import React, { useState } from 'react'
import PropTypes from "prop-types";


const AddCategory = ({setCategory}) => {

  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e) =>{
    setInputValue(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(inputValue.trim().length === 0){
        alert("Inserte un valor");
    }
    else{
        setCategory(category => {
            if([...category].indexOf(inputValue) > -1){
                alert("Ya existe el valor");
                return category;
            }
                
            return [inputValue, ...category];
        });
    }
  }
    
  return (
    <form onSubmit={handleOnSubmit}>
       <input type="text" value={inputValue} onChange={handleInputChange}/>
    </form>
  )
}

AddCategory.propTypes = {setCategory: PropTypes.func.isRequired}

export default AddCategory;