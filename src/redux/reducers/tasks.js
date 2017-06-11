const tasks = (state = [{task: 'Recharge TV', isCompleted: false, isEditing: false}, {task: 'Pay electricity bill', isCompleted: true, isEditing: false}], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'DELETE_TASK':
            state = state.slice();
            state.splice(action.payload, 1)
            return state;
        case 'EDIT_TASK':
            const currentStateEdit = {...state[action.payload], isEditing: true};
            state[action.payload] = currentStateEdit;
            state = [...state, currentStateEdit];
            state.splice(state.length-1);
            return state;
        case 'SAVE_TASK':
            const currentStateSave = {...state[action.payload.taskid], task: action.payload.task, isEditing: false};
            state[action.payload.taskid] = currentStateSave;
            state = [...state, currentStateSave];
            state.splice(state.length-1);
            return state;
        case 'COMPLETED_TASK':
            const currentState = {...state[action.payload], isCompleted: !state[action.payload].isCompleted};
            state[action.payload] = currentState;
            state = [...state, currentState];
            state.splice(state.length-1);
            return state;
        default:
            return state;
    }
};

export default tasks;
