export const initialState = {
    searchJob: []
}

function reducer(state, action) {
    switch(action.type) {
        case "SEARCHED_JOB":
            return {
                ...state,
                searchJob: [...state.searchJob, action.job]
            }
        default:
            return state;
    }
}

export default reducer;