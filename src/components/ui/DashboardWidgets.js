import React from 'react';
import PropTypes from 'prop-types';
import { LargeCard, MiniCard } from './Cards';

const percentToDecimal = decimal => (decimal.toFixed(3) + '%').replace(/^[0]+/, "");

const calcWinPercentage = (totalGames, totalWins) => percentToDecimal(totalWins/totalGames);

export const DashboardWidgets = ({totalGames=162, home, away, totalWins=0}) => (
    <div className="dashboard">
        <div className="card-deck mb-3 text-center record">
            <LargeCard amount={totalWins} label={'Wins'} />
            <LargeCard amount={totalGames -totalWins} label={'Losses'} />
        </div>
        <div className="card-deck mb-3 text-center">
            <MiniCard heading={'h2'} amount={totalGames} label={'total games'} />
            <MiniCard heading={'h2'} amount={home} label={'home games'} />
            <MiniCard heading={'h2'} amount={away} label={'away games'} />
        </div>
        {(totalGames > 0) ? <div className="alert alert-primary" role="alert">{ calcWinPercentage(totalGames, totalWins) } winning percentage</div> : null }
        
    </div> 
)
DashboardWidgets.propTypes = {
    totalGames:PropTypes.number,
    home:PropTypes.number,
    away:PropTypes.number,
    totalWins:PropTypes.number
}
