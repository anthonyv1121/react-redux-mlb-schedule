import A from '../constants/actionTypes';
import { endpoint, params } from '../constants/constants';

export const getGames = () => (dispatch, getState) => {
    fetch(endpoint)
        .then(response =>{
            if(response.ok){
                return response.json()
            }
            throw Error(response.statusText);
        })
        .then(games => dispatch(setGames(games)))
        .catch(err => {
            dispatch(addError('Unable to get games data. Likely a server error. Check back later.'))
            console.log(err)
        })       
}

export const getGameById= (id) => (dispatch) => {
    //console.log(endpoint + id);
    
    fetch(endpoint + id)
        .then(response => response.json())
        .then(game => dispatch(setEditedGame(game)) )
        .catch(err => {
            console.log(err)
        })       
}
    
export const addGame = (game) => (dispatch, getState) => {

    dispatch({
        type: A.FETCHING_IN_PROGRESS
    })
    
    fetch(endpoint, params(game, "post"))
        .then(response => response.json())
        .then(json => {
             dispatch({
                type:A.ADD_GAME,
                game:json
            })
            setTimeout(() => {
                dispatch({
                    type: A.FETCHING_COMPLETE
                })
            }, 5000)

            // setTimeout(() => {
            //     dispatch({
            //         type: A.FETCHING_CANCELED
            //     })
            // }, 10000)
        })  
        .catch(err => {
            console.error(err)
        }) 
}
export const updateGame = (id, game) => (dispatch) => {
    
    dispatch({
        type: A.FETCHING_IN_PROGRESS
    })
    
    fetch(endpoint + id, params(game, "put"))
        .then(response => {
            return response.json()
        })
        .then(json => {
            dispatch({
                type:A.UPDATE_GAME,
                game:json
            })
            setTimeout(() => {
                dispatch({
                    type: A.FETCHING_COMPLETE
                })
            }, 5000)
        })  
        .catch(err => {
            console.error(err)
        }) 
}

export const removeGame = (id) => (dispatch) => {
    
    fetch(endpoint + id, params({id}, "delete"))
        .then(response => response.json())
        .then(json => {
            dispatch({
                type:A.REMOVE_GAME,
                id
            })
            
        })  
        .catch(err => {
            console.error(err)
        }) 
}

//action creators
export const setGames = (games) => {
    return {
        type:A.SET_GAMES,
        games
    }
}

export const setFilter = (gamesFilter) => {
    return {
        type:A.SET_GAME_FILTER,
        gamesFilter
    }
}

export const setEditedGame = (editedGame) => {
    return {
        type:A.SET_EDITED_GAME,
        editedGame
    }
}

export const addError = (error) => {
    return {
        type:A.ADD_ERROR,
        error
    }
}

export const fetchingCanceled = () => {
    return {
        type: A.FETCHING_CANCELED
    }
}