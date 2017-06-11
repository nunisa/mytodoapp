export const addTodoTask = task => ({
    type: 'ADD_TASK',
    payload: {task, isCompleted: false, isEditing: false}
});

export const deleteTodoTask = taskid => ({
    type: 'DELETE_TASK',
    payload: taskid
});

export const editTodoTask = taskid => ({
    type: 'EDIT_TASK',
    payload: taskid
});

export const completedTodoTask = taskid => ({
    type: 'COMPLETED_TASK',
    payload: taskid
});

export const saveTodoTask = (task, taskid) => ({
    type: 'SAVE_TASK',
    payload: {task, taskid}
});