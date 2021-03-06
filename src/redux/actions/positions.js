
export function positionsFetchDataSuccess(positions){
    return{
        type: 'POSITIONS_FETCH_DATA_SUCCESS',
        positions
    }
}

export function positionsFetchData(url){
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                return response
            })
            .then(response => response.json())
            .then(positions => dispatch(positionsFetchDataSuccess(positions)))
    }
}