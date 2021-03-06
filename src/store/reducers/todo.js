import * as actionTypes from '../actions/constants';

const initialState = {
    todos: [],
    buttonDisabled: false
};

const addToDo = (state, action) => ({
    ...state,
    todos: [...state.todos, action.newToDo]
});

const startAdding = (state, action) => ({
    ...state,
    buttonDisabled: true
});

const finishAdding = (state, action) => ({
    ...state,
    buttonDisabled: false
});

const markAsDone = (state, action) => {
    const updatedToDo = state.todos.map(todo => {
        if (todo.key === action.toDoKey) {
            todo.done = !todo.done;
        }
        return todo;
    });
    return {
        ...state,
        todos: updatedToDo
    };
};

const removeToDo = (state, action) => {
    const updatedToDo = state.todos.filter(todo => todo.key !== action.toDoKey);
    return {
        ...state,
        todos: updatedToDo
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return addToDo(state, action);
        case actionTypes.MARK_AS_DONE_TODO:
            return markAsDone(state, action);
        case actionTypes.REMOVE_TODO:
            return removeToDo(state, action);
        case actionTypes.START_ADDING:
            return startAdding(state, action);
        case actionTypes.FINISH_ADDING:
            return finishAdding(state, action);
        default:
            return state;
    }
};
export default reducer;
