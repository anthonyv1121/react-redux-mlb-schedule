import React from 'react';
import { GameListMenu } from '../containers/GameListMenu';
import { GameRow } from './GameRow';
import { GAME_FILTERS } from '../../constants/constants';



export const GamesList = ({games, onRemoveGame}) => (
    <div>
        <div className="row">
            <div className="col-10"><GameListMenu filters={Object.keys(GAME_FILTERS)}/></div>
            <div className="col-2 nav-link">Total Games: {games.length}</div>
        </div>
        
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Opponent</th>
                    <th scope="col">Location</th>
                    <th scope="col">Wins</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {games.map((game, i) => 
                        <GameRow key={i} {...game} onRemoveGame={onRemoveGame}/>
                )}
            </tbody>
        </table>
    </div>
)