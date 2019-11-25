import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, TextField } from '@material-ui/core';
import Row from './Row';

export class UserPage extends Component {
  state = {
    name: '',
    score: '',
  }

  componentDidMount() {
    this.props.dispatch({ type: 'GET_QB' });
  }

  inputHandler = (event, property) => {
    this.setState({
      [property]: event.target.value,
    });
  }

  addButtonHandler = () => {
    this.props.dispatch({ type: 'ADD_QB', payload: this.state })
    this.setState({
      name: '',
      score: '',
    });
  }

  render() {
    return (
      <div>
        <Paper style={{ maxHeight: '800px', overflow: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Quarterback</TableCell>
                <TableCell>Symmetry</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><TextField label='name' value={this.state.name} onChange={(event) => this.inputHandler(event, 'name')}></TextField></TableCell>
                <TableCell><TextField label='score' value={this.state.score} onChange={(event) => this.inputHandler(event, 'score')}></TextField></TableCell>
                <TableCell><Button onClick={this.addButtonHandler}>Add</Button></TableCell>
                <TableCell></TableCell>
              </TableRow>
              {this.props.reduxState.adminReducer[0] && this.props.reduxState.adminReducer.map(qb => (
                <Row
                  key={qb.id}
                  qb={qb}
                />
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = reduxState => ({
  reduxState,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
