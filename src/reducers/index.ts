const initialState = {
    isEnglish: false,
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ('CHANGE_LANGUAGE'):
           return {
        ...state,
        isEnglish: !state.isEnglish,
        } 
        default:
            return state;
    }
};

export default rootReducer; 