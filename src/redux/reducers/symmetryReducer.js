const symmetryReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SYMMETRY':
            return action.payload;
        default:
            return state;
    }
};

export default symmetryReducer;