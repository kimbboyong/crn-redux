let initalState = {
    count: 0,
}

function reducer(state = initalState, action) {
    console.log("action ===> ?", action);
    if (action.type === "INCREMENT") {
        return { ...state, count: state.count + 1 };
    } else if (action.type === "MINUS") {
        return { ...state, count: state.count - 1 };
    }

    return { ...state };
}

export default reducer;