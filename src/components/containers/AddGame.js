import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { GameForm } from '../ui/GameForm';
import { getGameById, fetchingCanceled } from '../../redux/actions';
import { AddGameStatus } from '../ui/AddGameStatus';
import { LoadingOverlay } from '../ui/LoadingOverlay';

const mapStateToProps = (state) => {
    
    return {
        editedGame: state.editedGame,
        fetching:state.fetching
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onGetGameById: (id) => {
            dispatch(getGameById(id) )
        },
        onFetchingComplete: () => {
            dispatch(fetchingCanceled())
        },
        router: (route) => {
            ownProps.history.push(route)
        }
    }
}

class AddGameWrapper extends Component{
    constructor(props){
        super(props);
    }

     componentWillMount(){
         if(this.props.match.params.id){
                this.props.onGetGameById(this.props.match.params.id)
         }  
     }
   

     
    render() {
        const {opponent, date, win, home, id} = this.props.editedGame;
       console.log('AddGameWrapper', this.props);
        return (
            <div>
                { (this.props.fetching.loading || this.props.fetching.loaded) ?  
                    <LoadingOverlay fetching={this.props.fetching} isEditing={id ? true : false} onExitScreen={this.props.onFetchingComplete} reRoute={this.props.router}/> : null
                }
                <GameForm opponent={opponent} date={date} win={win} home={home} id={id} fetching={this.props.fetching}/>
            </div>
        )
    }
}


export const AddGame = connect(mapStateToProps, mapDispatchToProps)(AddGameWrapper)
