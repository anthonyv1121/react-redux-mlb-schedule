import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { Dashboard } from './containers/Dashboard';
import { Menu } from './ui/Menu';
import { GameResults } from './containers/GameResults';
import { AddGame } from './containers/AddGame';
import { Error } from './ui/Error';

const mapStateToLinkProps = (state) => { 
    return {
        errors:state.errors
    }
  }

export const ErrorContainer = connect(mapStateToLinkProps)(Error)

export const App = (props) => {
    return (
        <div className="app">
            <Menu />
            <div className="container">
                <ErrorContainer />
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/games" component={GameResults}/>
                <Route exact path="/add-game" component={AddGame}/>
                <Route exact path="/add-game/:id" component={AddGame}/>
            </div>
         </div>
    )
}



