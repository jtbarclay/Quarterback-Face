// increments and decrements from nav buttons to control switch case conditional rendering
const navReducer = (state = 0, action) => {
    switch (action.type) {
        case 'NEXT_PAGE':
            return state + 1;
        case 'PREV_PAGE':
            return state - 1;
        case 'START_OVER':
            return 0;
        default:
            return state;
    }
};

export default navReducer;