import React, { Component } from 'react';
import './Landing.css';
import { List, ListItem, ListItemIcon, ListItemText, Container } from '@material-ui/core';
import FootballHelmet from '../Icons/FootballHelmet';
import About from '../About/About';

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
                                See how you stack up again NFL Quarterbacks.
                        </ListItemText>
                        </ListItem>
                    </List>
                    <About/>
                </Container>
            </div>
        )
    }
}

export default Landing;
