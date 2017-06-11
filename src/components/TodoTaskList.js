import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';
import { connect } from 'react-redux';
import TodoTask from './TodoTask';

const styles = {
     slNum: {   
        width: 30,
        paddingRight: 0
     },
     todoAction: {   
        paddingRight: 24,
        textAlign: 'center',
        width: 90
     }
};

class TodoTaskList extends Component {
    render() {
        const { tasks } = this.props;
        return (
            <div>
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn style={styles.slNum}>#</TableHeaderColumn>
                            <TableHeaderColumn>Todo Task</TableHeaderColumn>
                            <TableHeaderColumn style={styles.todoAction}>Action</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} deselectOnClickaway={true} showRowHover={true}>
                        {tasks.map((task, i) => <TodoTask key={i} taskid={i} todoTask={task} />)}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default connect(
	(state, ownProps) => ({
        tasks: state.tasks
    }),
	null
)(TodoTaskList);
