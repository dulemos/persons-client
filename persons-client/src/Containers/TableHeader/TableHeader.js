import React, {Component} from 'react'


import './TableHeader.css'


export default class TableHeader extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className="table-header">
                {this.props.children}
            </div>
        )
    }
}