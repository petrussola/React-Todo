import React from 'react';

export default function Search({eventSearchHandler}) {
    return (
        <div>
            <input type="text" placeholder='type to filter tasks' onChange={eventSearchHandler} />
        </div>
    )
}