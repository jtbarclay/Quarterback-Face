import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid, Card } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { HashRouter as Router, Route } from 'react-router-dom';
// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import './App.css';

// import components
import Landing from '../Landing/Landing';
import Upload from '../Upload/Upload';
import Waiting from '../Waiting/Waiting';
import Individual from '../Individual/Individual';
import Comparison from '../Comparison/Comparison';
import Admin from '../Admin/Admin';

// sets material ui theme
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
                backgroundColor: '#F3F3F3',
            },
        },
        MuiCard: {
            root: {
                height: 600,
                marginTop: 100,
                backgroundColor: '#F3F3F3',
            }
        },
        MuiCardContent: {
            root: {
                height: 450,
            },
        },
        MuiStepper: {
            root: {
                backgroundColor: '#F3F3F3',
            },
        },
        MuiDialogTitle: {
            root: {
                backgroundColor: '#F3F3F3',
            },
        },
        MuiDialogContent: {
            root: {
                backgroundColor: '#F3F3F3',
            },
        },
        MuiDialogActions: {
            root: {
                backgroundColor: '#F3F3F3',
            },
        },
    },
});

export class App extends Component {
    render() {
        return (
            <Router>
                <ThemeProvider theme={theme}>
                    <Grid container justify='center' alignItems='center'>
                        <Grid item xs={6}>
                            <Route
                                exact
                                path='/'
                                render={() => (
                                    <Card>
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
                                    </Card>
                                )}
                            />
                            <Route
                                exact
                                path='/admin'
                                component={Admin}
                            />
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </Router>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(App);
