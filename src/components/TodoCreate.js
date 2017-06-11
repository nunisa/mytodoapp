import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/';

class TodoCreate extends Component {
    handleTaskSubmit(e) {
        if(e.key === 'Enter') {
            this.props.addTodoTask(this.refs.task.input.value);
            this.refs.task.input.value = '';
            e.preventDefault();
        }
    }

    render() {
        return (
            <div>
                <TextField
                    hintText="Add new task, then hit 'Enter' key"
                    floatingLabelText="Add New Todo Task"
                    ref="task"
                    onKeyPress={this.handleTaskSubmit.bind(this)}
                />
            </div>
        );
    }
}

export default connect(
	(state, ownProps) => ({}),
	actions
)(TodoCreate);
