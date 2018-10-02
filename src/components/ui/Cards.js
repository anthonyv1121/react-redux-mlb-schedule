import React from 'react';

export const LargeCard = ({amount, label}) => (
    <div className="card box-shadow">
            <div className="text-muted">{label}</div>
            <h1>{amount}</h1>     
     </div>
)

export const MiniCard = ({heading, amount, label}) => (
    <div className="card box-shadow">
            {(heading === 'h2') ? <h2>{amount}</h2> : <h3>{amount}</h3>}
            <span className="text-muted">{label}</span>
     </div>
)