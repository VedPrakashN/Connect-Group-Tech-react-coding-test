import React from 'react';

function Solution(){

    const a = [2, 3, 1, 2, 3];

    const duplicatedData = a.filter((value, index) => a.indexOf(value) !== index);

    return (
        <div className="mt-4">
            
            <h3> var a = [2, 3, 1, 2, 3]</h3>
            Duplicated Data: 
            <ul>
                {duplicatedData.map((duplicate, index) => (
                    <li key={index}>{duplicate}</li>
                ))}
            </ul>

            <hr/>

        </div>
    )
}

export default Solution;
