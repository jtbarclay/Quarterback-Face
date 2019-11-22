import React, { Component } from 'react'
import { connect } from 'react-redux';
import { TableRow, TableCell, Button, TextField } from '@material-ui/core';

export class Row extends Component {

    state = {
        qb: this.props.qb,
    }

    inputHandler = (event, property) => {
        this.setState({
            qb: {
                ...this.state.qb,
                [property]: event.target.value,
            }
        });
    }

    editHandler = () => {
        this.props.dispatch({ type: 'EDIT_QB', payload: this.state })
    }

    deleteHandler = () => {
        this.props.dispatch({ type: 'DELETE_QB', payload: this.state })
    }

    render() {
        return (
            <TableRow>
                <TableCell><TextField value={this.state.qb.name} onChange={(event) => this.inputHandler(event, 'name')} /></TableCell>
                <TableCell><TextField value={this.state.qb.score} onChange={(event) => this.inputHandler(event, 'score')} /></TableCell>
                <TableCell><Button onClick={this.editHandler}>Edit</Button></TableCell>
                <TableCell><Button onClick={this.deleteHandler}>Delete</Button></TableCell>
            </TableRow>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Row);
