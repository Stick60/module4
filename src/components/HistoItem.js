import React from 'react';

function HistoItem({ id, movie, loanAt }) {
    return (
        <li key={id} className="liste">
            <span className='titreliste'>{movie} </span>
            loué le  <span className="loanat">{loanAt}</span>
        </li >
    );
};

export default HistoItem;

