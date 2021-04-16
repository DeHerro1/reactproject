import React from 'react'

const Companies = ({display, handleChange, company}) => {

    return (
        <div>
            <input 
                    type="text"
                    onChange={handleChange}
                    value={company}
                    placeholder="Comapanies"
                    />  
        </div>
    )
}

export default Companies;
