import React from 'react';

import './loading.css';

export const Loading = ({ background: color = 'rgb(71, 71, 219)' }) => {

    return (

        <div className='loading'>
            <div className="obj" style={{ background: color }}></div>
            <div className="obj" style={{ background: color }}></div>
            <div className="obj" style={{ background: color }}></div>
            <div className="obj" style={{ background: color }}></div>
            <div className="obj" style={{ background: color }}></div>
            <div className="obj" style={{ background: color }}></div>
            <div className="obj" style={{ background: color }}></div>
            <div className="obj" style={{ background: color }}></div>
        </div>

    )
}
