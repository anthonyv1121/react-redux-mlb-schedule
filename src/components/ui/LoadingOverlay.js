import React from 'react';
import '../../stylesheets/loading.css';

export const LoadingOverlay = ({fetching, isEditing, onExitScreen, reRoute}) => {
    
    const exit = (url) => {
        onExitScreen();
        reRoute(url);
    }
    return(
        <div className="loading">
            <div className="content">
                <h4>
                    {fetching.loading && 'Loading...'}
                    {fetching.loaded && isEditing && 'Game has been updated!'}
                    {fetching.loaded && !isEditing && 'Game has been added!'}
                </h4>
               <div hidden={fetching.loading ? true : false}>
                    <button className="btn btn-secondary btn-md mr-3" onClick={() => exit('/')}>View Added Game</button>
                    <button className="btn btn-secondary btn-md mr-3" onClick={() => exit('/add-game')}>Add A New Game</button>
                    <button className="btn btn-secondary btn-md" onClick={() => exit('/games')}>View All Games</button>
               </div>
            </div>
        </div>
    )
}