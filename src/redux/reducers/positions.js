export function positions(state = [], action){
    switch(action.type){
        case 'POSITIONS_FETCH_DATA_SUCCESS':
            return action.positions
        default:
            return state;    
    }
}