import React from 'react';

const Roles = ({display}) => {


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
    recursiveSearch(obj);
     return result;
     } 
    //  console.log(findObject(display, 'companyName', 'Facebook'));

    return (
        <div>
            <input 
                    type="text"
                    // onChange={handleChange}
                    // value={text}
                    placeholder="Job titles"
                    />  
        </div>
    )
}

export default Roles;
