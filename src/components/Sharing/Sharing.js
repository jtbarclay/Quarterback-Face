import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardContent, CardActions, IconButton, TextField, Button } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';

import NavButton from '../Buttons/NavButton';
import NavStepper from '../NavStepper/NavStepper';
import Copy from './Copy';
import './Sharing.css'

export class Sharing extends Component {

    state = {
        name: '',
        nameSet: false,
    };

    handleInput = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    render() {
        return (
            <div className='sharing'>
                <CardContent>
                    {this.state.nameSet ? (
                        <Copy
                            value={`
                            ${process.env.REACT_APP_URL_BASE}results/
                            ${btoa([
                                this.state.name,
                                Math.abs(Math.log(this.props.reduxState.symmetryReducer.eyebrows)).toFixed(2),
                                Math.abs(Math.log(this.props.reduxState.symmetryReducer.eyes)).toFixed(2),
                                Math.abs(Math.log(this.props.reduxState.symmetryReducer.nose)).toFixed(2),
                                Math.abs(Math.log(this.props.reduxState.symmetryReducer.mouth)).toFixed(2),
                                Math.abs(Math.log(this.props.reduxState.symmetryReducer.upperJawline)).toFixed(2),
                                Math.abs(Math.log(this.props.reduxState.symmetryReducer.midJawline)).toFixed(2)
                            ].join('+'))}
                        `}
                        />
                    ) : (
                            <>
                                <TextField
                                    value={this.state.name}
                                    label='Your Name'
                                    onChange={this.handleInput}
                                />
                                <Button
                                    variant='outlined'
                                    color='primary'
                                    onClick={() => {
                                        if (this.state.name === '') {
                                            window.alert('Please enter your name.')
                                        } else {
                                            this.setState({ nameSet: true, })
                                        }
                                    }}
                                >
                                    Get Link
                            </Button>
                            </>
                        )}

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
                    <IconButton
                        color='primary'
                        onClick={() => this.props.dispatch({ type: 'START_OVER' })}
                        // disabled={this.props.disabled}
                        style={{ visibility: 'visible' }}
                    >
                        <ReplayIcon
                            fontSize='large'
                            color='primary'
                        />
                        Start Over
                    </IconButton>
                </CardActions>
            </div>

        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Sharing);
