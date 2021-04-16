import React from 'react'

const Location = ({display}) => {


    const findObject = (obj = {}, key, value) => {
        const result = [];
        const recursiveSearch = (obj = {}) => {
           if (!obj || typeof obj !== 'object') { return;
        };
        if (obj[key] === value){
           result.push(obj);
        };
        Object.keys(obj).forEach(function (k) {
           recursiveSearch(obj[k]);
        });
     } 
     console.log(result);
    recursiveSearch(obj);
     return result;
     } 

    //  console.log(findObject(display, 'Roles', 'Wordpress developer'));
    return (
        <div>
            <input 
                type="text"
                // onChange={handleChange}
                // value={text}
                placeholder="Location"
                />  
        </div>
    )
}

export default Location;
