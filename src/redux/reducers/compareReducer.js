const compareReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_COMPARE':
            return action.payload;
        default:
            return state;
    }
};

export default compareReducer;