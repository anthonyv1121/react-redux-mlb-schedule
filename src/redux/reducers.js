import { combineReducers } from 'redux';
import A from '../constants/actionTypes';

const game = (state, action) => {
    console.log('action', action);
    
    switch(action.type) {
         case A.ADD_GAME:
            return {
                opponent:action.game.opponent,
                date: action.game.date,
                home: action.game.home,
                win: action.game.win,
                id: action.game.id,
            }

        case A.UPDATE_GAME:
            if(state.id !== action.game.id){
                return state
            }
            return {
                ...action.game
            }

        default:
            return state;
    }
}

export const games = (state=[], action) => {
    
    switch(action.type) {
        case A.SET_GAMES:
            return action.games

        case A.ADD_GAME:
            return [...state, game(undefined, action)];

        case A.UPDATE_GAME:
            return state.map(g => game(g, action))

        case A.REMOVE_GAME:
            return state.filter(game => game.id !== action.id)

        default:
            return state;
    }
}

export const fetching = (state={loading:false, loaded:false}, action) => {
    switch(action.type) {
        case A.FETCHING_IN_PROGRESS:
            return {
                loaded:false,
                loading:true
            }

        case A.FETCHING_COMPLETE:
            return {
                loaded:true,
                loading:false
            }

        case A.FETCHING_CANCELED:
            return {
                loaded:false,
                loading:false
            }

        default:
            return state;
    }
}




export const errors = (state=[], action) => {
   // console.log(action);
    
    switch(action.type) {
        case A.ADD_ERROR:
            return [...state, action.error]

        case A.CLEAR_ERROR:
            return state

        default:
            return state;
    }
}

export const gamesFilter = (state="SHOW_ALL", action) => {
    switch(action.type) {
        case A.SET_GAME_FILTER:
            return action.gamesFilter

        default:
            return state;
    }
}

export const editedGame = (state={}, action) => {
    switch(action.type) {
        case A.SET_EDITED_GAME:
            return action.editedGame

        case A.FETCHING_CANCELED:
            return {}

        default:
            return state;
    }
}
export default combineReducers({
    games,
    errors,
    gamesFilter,
    editedGame,
    fetching
})