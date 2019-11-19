import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid, Card, CardContent, CardActions, } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Landing from '../Landing/Landing';
import Upload from '../Upload/Upload';
import Waiting from '../Waiting/Waiting';
import Individual from '../Individual/Individual';
import Comparison from '../Comparison/Comparison';
import NavButton from '../Buttons/NavButton';
import { NavStepper } from '../NavStepper/NavStepper';

const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                margin: '20px',
            },
        },
        MuiCardActions: {
            root: {
                justifyContent: 'space-between',
            },
        },
    },
});

export class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Grid container justify='center' alignItems='center'>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
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
                            </CardContent>
                            <CardActions>
                                <NavButton
                                    text='Prev'
                                    onClick={() => this.props.dispatch({ type: 'PREV_PAGE' })}
                                    disabled={this.props.reduxState.navReducer === 0}
                                />
                                <NavStepper step={this.props.reduxState.navReducer}/>
                                <NavButton
                                    text='Next'
                                    onClick={() => this.props.dispatch({ type: 'NEXT_PAGE' })}
                                    disabled={this.props.reduxState.navReducer === 4}
                                />
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </ThemeProvider>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(App);
