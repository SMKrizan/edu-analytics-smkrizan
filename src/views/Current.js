import React, {Component} from 'react';

class Current extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            records: []
        }
    }
    
    render() {
        return (
            <h1>current data</h1>
        );
    }
}

export default Current;