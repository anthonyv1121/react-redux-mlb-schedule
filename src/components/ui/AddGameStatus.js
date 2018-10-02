import React from 'react';

export const AddGameStatus = ({fetching, isEditing}) => {
    return(
        <p>
            {fetching.loaded && isEditing && 'Game Updated'}
            {fetching.loaded && !isEditing && 'Game Added'}
            {fetching.loading && 'Fetching...'}
        </p>
    )
}