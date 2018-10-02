import React from 'react';

export const Error = ({errors=[]}) => {
    
    return(
        <div>
            {
                (errors.length) ?
                    errors.map((msg, i) => 
                        <div className="alert alert-danger alert-dismissible fade show" role="alert" key={i}>
                            <div><strong>Error:</strong> {msg}</div>
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                         </div>
                    ) : null
            }
        </div>
    )
}