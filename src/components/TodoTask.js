import React, { Component } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import ActionUpdate from 'material-ui/svg-icons/action/update';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/';

const styles = {
     slNum: {   
        width: 30,
        paddingRight: 0
     },
     todoAction: {   
        paddingRight: 24,
        textAlign: 'center',
        width: 90
     },
     actionBtn: {   
        marginRight: 10
     }
};

class TodoTask extends Component {
    render() {
        const { taskid, todoTask, deleteTodoTask } = this.props;
        const { isCompleted } = todoTask;
        return (
            <TableRow>
                <TableRowColumn style={styles.slNum}>{taskid+1}</TableRowColumn>
                <TableRowColumn style={{color: isCompleted ? '#008000' : '#FF0000', cursor: 'pointer'}}>
                    {renderTask(this.props)}
                </TableRowColumn>
                <TableRowColumn style={styles.todoAction}>
                    {renderEdit(this.props)}
                    <FloatingActionButton mini={true} secondary={true} onClick={() => { deleteTodoTask(taskid) }}>
                        <ActionDelete />
                    </FloatingActionButton>
                </TableRowColumn>
            </TableRow>
        );
    }
}

function renderTask(props) {
    const { taskid, todoTask, completedTodoTask, saveTodoTask } = props;
    const { task, isEditing } = todoTask;

    if(!isEditing) {
        return (
            <span onClick={() => { completedTodoTask(taskid) }}>{task}</span>
        );
    }
    function handleTaskEditSubmit(e) {
        if(e.key === 'Enter') {
            saveTodoTask(document.getElementById('taskEdit').value, taskid);
            e.preventDefault();
        }
    }
    return (
        <TextField
            id="taskEdit"
            ref="taskEdit"
            defaultValue={task}
            onKeyPress={handleTaskEditSubmit.bind(this)}
        />
    );
}

function renderEdit(props) {
    const { taskid, todoTask, editTodoTask } = props;
    const { isEditing } = todoTask;

    if(!isEditing) {
        return (
            <FloatingActionButton mini={true} style={styles.actionBtn} onClick={() => { editTodoTask(taskid) }}>
                <ImageEdit />
            </FloatingActionButton>
        );
    }
    return (
        <FloatingActionButton mini={true} style={styles.actionBtn} disabled={true}>
            <ActionUpdate />
        </FloatingActionButton>
    );
}

export default connect(
	(state, ownProps) => ({}),
	actions
)(TodoTask);
