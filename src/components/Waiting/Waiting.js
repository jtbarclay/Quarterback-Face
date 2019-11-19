import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardActions, CardContent } from '@material-ui/core';
import NavButton from '../Buttons/NavButton';
import NavStepper from '../NavStepper/NavStepper';

export class Waiting extends Component {
    render() {
        return (
            <div>
                <CardContent>

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
                        style={{ visibility: 'visible' }}
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

