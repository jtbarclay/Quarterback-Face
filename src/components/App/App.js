import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid, Card } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
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
import Sharing from '../Sharing/Sharing';
import Results from '../Results/Results';

// sets material ui theme
const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                margin: '10px',
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
                maxWidth: 900,
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
                    <Grid container justify='center' alignItems='center' style={{minWidth: '700px'}}>
                        <Grid item lg={6} md={8} sm={12}>
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
                                                case 5:
                                                    return <Sharing />;
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
                            <Route
                                path='/results/:id'
                                component={Results}
                            />
                        </Grid>
                    </Grid>
                    <footer className='githubicon'>
                        <a href='https://github.com/jtbarclay/qbface' target='_blank' rel='noopener noreferrer'><GitHubIcon fontSize='large' /></a>
                    </footer>
                </ThemeProvider>
            </Router>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(App);
