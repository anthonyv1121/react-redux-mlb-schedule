import { connect } from 'react-redux'
import { DashboardWidgets } from '../ui/DashboardWidgets';


const isHome= (games) => {
    return games.filter(g => g['home']).length
 }
 const isAway= (games) => {
     return games.filter(g => !g['home']).length
 }
 const won= (games) => {
     return games.filter(g => g['win']).length
  }
 
 const mapStateToProps = (state) => {
     return {
         totalGames:state.games.length,
         home:isHome(state.games, 'home'),
         away:isAway(state.games, 'away'),
         totalWins:won(state.games, 'win'),
     }
 }
 export const Dashboard = connect(mapStateToProps, null)(DashboardWidgets); 




