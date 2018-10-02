import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const GameRow = ({opponent, date, home, win, id, onRemoveGame}) => (
    <tr>
        <td>{date}</td>
        <td>{opponent}</td>
        <td>in {(home) ? 'NY' : opponent}</td>
        <td>{(win) ? 'WIN' : 'LOSS'}</td>
        <td>
            <NavLink to={"/add-game/" + id}>&#9998;</NavLink> 
            <a href="#" onClick={() => onRemoveGame(id)}>&#10006;</a>
        
        </td>
    </tr>
) 
GameRow.propTypes = {
    opponent:PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    home: PropTypes.bool.isRequired,
    win: PropTypes.bool
}
