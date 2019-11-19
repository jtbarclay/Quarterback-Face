import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Landing.css';
import { List, ListItem, ListItemIcon, ListItemText, Container, Button, CardContent, CardActions } from '@material-ui/core';
import FootballHelmet from '../Icons/FootballHelmet';
import About from '../About/About';
import NavButton from '../Buttons/NavButton';
import NavStepper from '../NavStepper/NavStepper';

function HelmetIcon() {
    return (
        <FootballHelmet
            viewBox='0 0 100 100'
            fontSize='small'
            color='action'
        />
    );
}


export class Landing extends Component {
    render() {
        return (
            <div className='landingContent'>
                <CardContent>
                    <h1>Welcome to Quarterback Face</h1>
                    <Container
                        maxWidth='sm'
                    >
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <HelmetIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Upload a selfie.
                        </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <HelmetIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    The algorithm will perform a series of calculations.
                        </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <HelmetIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    View your individual results.
                        </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <HelmetIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    See how you stack up against NFL Quarterbacks.
                        </ListItemText>
                            </ListItem>
                        </List>
                        <About />
                    </Container>
                </CardContent>
                <CardActions>
                    {/* custom nav buttons */}
                    <NavButton
                        text='Prev'
                        onClick={() => this.props.dispatch({ type: 'PREV_PAGE' })}
                        disabled={this.props.reduxState.navReducer === 0}
                        style={{visibility: 'hidden'}}
                    />
                    <NavStepper step={this.props.reduxState.navReducer} />
                    <NavButton
                        text='Start'
                        onClick={() => this.props.dispatch({ type: 'NEXT_PAGE' })}
                        disabled={this.props.reduxState.navReducer === 4}
                        style={{visibility: 'visible'}}
                    />
                </CardActions>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Landing);
