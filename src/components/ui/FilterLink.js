import React from 'react';
import { connect } from 'react-redux'
import { setFilter } from '../../redux/actions'
    
const mapStateToLinkProps = (state, ownProps) => { 
  return {
      active:ownProps.filter === state.gamesFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFilterGames: () => {
            dispatch(setFilter(ownProps.filter))
        }
    }
}

export const Link = ({children, active, onFilterGames}) => {
    return (
        <li className="nav-item">
            {
                active ? <span className="nav-link active">{children}</span> : 
                         <span href="#" className="nav-link" onClick={onFilterGames}>{children}</span>
                
            }
            
        </li> 
    )
}
    

export const FilterLink = connect(mapStateToLinkProps, mapDispatchToProps)(Link);
    