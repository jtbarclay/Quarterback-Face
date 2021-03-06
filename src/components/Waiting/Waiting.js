import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardActions, CardContent } from '@material-ui/core';
import NavButton from '../Buttons/NavButton';
import NavStepper from '../NavStepper/NavStepper';
import './Waiting.css';
import logo from './logo.svg';

export class Waiting extends Component {
    render() {
        return (
            <div>
                <CardContent>
                    <img src={logo} className="App-logo" alt="logo" />
                </CardContent>
                <CardActions>
                    {/* custom nav buttons */}
                    <NavButton
                        text='Prev'
                        onClick={() => this.props.dispatch({ type: 'PREV_PAGE' })}
                        disabled={this.props.reduxState.navReducer === 0}
                        style={{ visibility: 'hidden' }}
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


export default connect(mapStateToProps)(Waiting);

