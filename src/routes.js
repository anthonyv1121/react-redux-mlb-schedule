import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { App } from './components/App';

export const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App}/>
        </Switch>
    </BrowserRouter>
)