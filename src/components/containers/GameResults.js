import { connect } from 'react-redux'
import { GamesList } from '../ui/GamesList';
import { GAME_FILTERS } from '../../constants/constants';
import { removeGame } from '../../redux/actions';


const filterGames = (games, filter) => {
    
    const {SHOW_HOME, SHOW_AWAY, SHOW_WINS} = GAME_FILTERS;

    switch(filter) {
        case SHOW_HOME: return games.filter(g => g['home'])
        case SHOW_AWAY: return games.filter(g => !g['home'])
        case SHOW_WINS: return games.filter(g => g['win'])
        default:    return games
    }
}

const mapStateToProps = (state) => {
    return {
        games: filterGames(state.games, state.gamesFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveGame: (id) => {
            dispatch(removeGame(id))
        }
    }
}

export const GameResults = connect(mapStateToProps, mapDispatchToProps)(GamesList); 
