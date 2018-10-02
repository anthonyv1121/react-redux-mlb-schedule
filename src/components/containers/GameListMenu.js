import React from 'react';
import { FilterLink } from '../ui/FilterLink';

const trimLabel = (string) => string.slice(string.indexOf('_') + 1, string.length)

export const GameListMenu = ({filters}) =>
    <ul className="nav nav-pills mb-3">
        {
            filters.map((f, i) =>
                <FilterLink filter={f} key={i}>{trimLabel(f)}</FilterLink>        
            )
        }    
    </ul>
    