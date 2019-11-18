import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import Landing from '../Landing/Landing';
import Upload from '../Upload/Upload';
import Waiting from '../Waiting/Waiting';
import Individual from '../Individual/Individual';
import Comparison from '../Comparison/Comparison';

export class App extends Component {

    render() {
        return (
            <div>
                {(() => {
                    switch (this.props.reduxState.navReducer) {
                        case 0:
                            return <Landing />;
                        case 1:
                            return <Upload />;
                        case 2:
                            return <Waiting />;
                        case 3:
                            return <Individual />;
                        case 4:
                            return <Comparison />;
                        default:
                            return null;
                    }
                })()}
                <Button variant='outlined' color='primary' onClick={() => this.props.dispatch({type: 'PREV_PAGE'})}>Prev</Button>
                <Button variant='outlined' color='primary' onClick={() => this.props.dispatch({type: 'NEXT_PAGE'})}>Next</Button>

            </div>

        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(App);
