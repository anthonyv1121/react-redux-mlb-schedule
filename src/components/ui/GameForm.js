import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addGame, updateGame } from '../../redux/actions';
import { opponentsList } from '../../constants/constants'
import { AutoComplete } from '../ui/AutoComplete';

export class GameForm extends Component{
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit(e){
        e.preventDefault();
        const game = {
            date:this.refs.dateInput.value,
            home: this.refs.homeCheck.checked,
            win: this.refs.winCheck.checked,
            opponent: this.refs.opponent.value,
        }
      //  console.log(game);
        
        this.props.id ? this.props.dispatch(updateGame(this.props.id, game)) 
                      : this.props.dispatch(addGame(game));
    }

    componentDidUpdate(props){
       if(!this.props.fetching.loading && !this.props.fetching.loaded){
            this.setDefaults()
       }
        
    }

    setDefaults(props){
        return props ? {
            opponent: props.opponent,
            date: props.date,
            home: props.home,
            win: props.win,
        } : this.defaultProps;
    }
   
    render(){
        console.log('GameForm', this.props);
        const {opponent, date, home, win} = this.setDefaults(this.props);
            return (
                <div className="card">
                    <h1 className="mb-3 text-muted">Add A New Game</h1>
                    <div className="form-group mb-0">
                        <form onSubmit={this.submit} key={this.props.id}>
                            <div>
                                <label htmlFor="opponent">Opponent</label>
                                <AutoComplete options={opponentsList} defaultValue={opponent} ref="opponent"/>
                            </div>
                    
                            <div>
                                <label htmlFor="date">Date</label>
                                <input id="date" 
                                    className ="form-control"
                                    type="date" 
                                    ref="dateInput"
                                    defaultValue={date}
                                    required />
                            </div>
                    
                            <div className="mt-3">
                                <input id="home" 
                                    className ="form-check-label"
                                    type="checkbox"
                                    ref="homeCheck"
                                    defaultChecked={home} />
                                <label htmlFor="home">Home Game?</label>
                            </div>
                    
                            <div>	
                                <input id="win" 
                                    className ="form-check-label"
                                    type="checkbox"
                                    ref="winCheck"
                                    defaultChecked={win} />
                                <label htmlFor="win">Game Won?</label>
                            </div>
                            <button className="btn btn-primary btn-lg mt-2" type="submit" disabled={this.props.fetching.loading}>{this.props.id ? 'Update Game' : 'Add Game'}</button>
                        </form>
                    </div>
            </div>
                
            )
            
        }

        static defaultProps = {
            opponent: "",
            date: new Date().toISOString().slice(0,10),
            home:false,
            win:false
        }

}



GameForm = connect()(GameForm);