import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TodoHeader from './TodoHeader';
import TodoCreate from './TodoCreate';
import TodoTaskList from './TodoTaskList';

const style = {
    minHeight: 400,
    width: 600,
    margin: '20px auto',
    textAlign: 'center',
    display: 'table'
};

class Todo extends Component {
    render() {
        return (
            <div>
                <Paper style={style} zDepth={3} >
                    <TodoHeader />
                    <TodoCreate />
                    <TodoTaskList />
                </Paper>
            </div>
        );
    }
}

export default Todo;
