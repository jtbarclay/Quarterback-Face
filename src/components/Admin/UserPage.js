import React, { Component } from 'react'
import { connect } from 'react-redux';
import LogOutButton from './LogOutButton';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, TextField } from '@material-ui/core';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
export class UserPage extends Component {
  state = {
    name: '',
    score: '',
  }

  inputHandler = (event, property) => {
    this.setState({
      [property]: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <Paper>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
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
                <TableCell><TextField label='name' onChange={(event) => this.inputHandler(event, 'name')}></TextField></TableCell>
                <TableCell><TextField label='score' onChange={(event) => this.inputHandler(event, 'score')}></TextField></TableCell>
                <TableCell><Button>Add</Button></TableCell>
                <TableCell></TableCell>
              </TableRow>
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
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
