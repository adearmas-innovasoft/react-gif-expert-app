import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

//functional components
export const GifExpertApp = ({titulo='GifExpertApp'}) =>{
     
    const [categories, setCategories] = useState(['Naruto']);
    
    return (
        <div>
            <h2>{titulo}</h2>
            <AddCategory setCategory={ setCategories }/>
            <hr></hr>
            
                {
                    categories.map(cat => (
                        <GifGrid 
                            key={ cat }
                            category={ cat }
                        />                        
                    ))
                }
        </div>        
    );
}

