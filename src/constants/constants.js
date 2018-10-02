export const endpoint = 'http://localhost:3006/games/';

export const gamesGroups = ['total', 'home', 'away'];
export const GAME_FILTERS = {
    SHOW_ALL: 'SHOW_ALL', 
    SHOW_WINS:'SHOW_WINS', 
    SHOW_HOME:'SHOW_HOME', 
    SHOW_AWAY:'SHOW_AWAY'
}
export const opponentsList = [
    "Baltimore Orioles",
    "Boston Red Sox",
    "New York Yankees",
    "Tampa Bay Rays",
    "Toronto Blue Jays",
    "Chicago White Sox",
    "Cleveland Indians",
    "Detroit Tigers",
    "Kansas City Royals",
    "Minnesota Twins",
    "Houston Astros",
    "Los Angeles Angels",
    "Oakland Athletics",
    "Seattle Mariners",
    "Texas Rangers"
];
export const params = (body, method) => {
    return {
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
         },
        body:JSON.stringify(body),
        method:method
    }
}
