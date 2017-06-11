import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class TodoHeader extends Component {
    render() {
        return (
            <div>
                <AppBar title="My Todo Tasks" iconElementLeft={<i/>} />
            </div>
        );
    }
}

export default TodoHeader;
