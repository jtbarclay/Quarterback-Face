import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardActions, CardContent, List, ListItem, ListItemText, Paper } from '@material-ui/core';
import NavButton from '../Buttons/NavButton';
import NavStepper from '../NavStepper/NavStepper';

export class Comparison extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_COMPARE' })
    }

    render() {
        return (
            <div>
                <CardContent>
                    {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
                    <Paper style={{ maxHeight: 450, overflow: 'auto' }}>
                        <List>
                            {this.props.reduxState.symmetryReducer.mean && this.props.reduxState.compareReducer[0] && this.props.reduxState.compareReducer.filter(qb => qb.score > this.props.reduxState.symmetryReducer.mean).map(qb => (
                                <ListItem key={qb.id}>
                                    <ListItemText primary={qb.name} />
                                </ListItem>
                            ))}
                            <ListItem
                                autoFocus={true}
                                selected={true}
                            >
                                <ListItemText primary='You' />
                            </ListItem>
                            {this.props.reduxState.symmetryReducer.mean && this.props.reduxState.compareReducer[0] && this.props.reduxState.compareReducer.filter(qb => qb.score < this.props.reduxState.symmetryReducer.mean).map(qb => (
                                <ListItem key={qb.id}>
                                    <ListItemText primary={qb.name} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </CardContent>
                <CardActions>
                    {/* custom nav buttons */}
                    <NavButton
                        text='Prev'
                        onClick={() => this.props.dispatch({ type: 'PREV_PAGE' })}
                        disabled={this.props.reduxState.navReducer === 0}
                        style={{ visibility: 'visible' }}
                    />
                    <NavStepper step={this.props.reduxState.navReducer} />
                    <NavButton
                        text='Next'
                        onClick={() => this.props.dispatch({ type: 'NEXT_PAGE' })}
                        disabled={this.props.reduxState.navReducer === 4}
                        style={{ visibility: 'hidden' }}
                    />
                </CardActions>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});


export default connect(mapStateToProps)(Comparison);