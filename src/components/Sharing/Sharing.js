import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardContent, CardActions, IconButton, } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';

import NavButton from '../Buttons/NavButton';
import NavStepper from '../NavStepper/NavStepper';
import Copy from './Copy';

export class Sharing extends Component {

    state = {
        name: 'jon',
        nameSet: false,
    };

    render() {
        return (
            <div>
                <CardContent>
                    {this.state.nameSet ? (
                        <Copy
                            value={`
                            ${process.env.REACT_APP_SHARE_URL_BASE}
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
                                <input value={this.state.name}
                                    onChange={({ target: { name } }) => this.setState({ name })} />
                                <button
                                    onClick={() => this.setState({ nameSet: true, })}
                                >
                                    Get Link
                            </button>
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
