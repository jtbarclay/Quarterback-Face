import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Radar } from 'chart.xkcd-react';
import { Card, CardActions, CardContent, Grid } from '@material-ui/core';
import NavButton from '../Buttons/NavButton';
import './Results.css';

export class Results extends Component {
    render() {
        const results = atob(this.props.match.params.id).split('+');
        return (
            <Grid container justify='center' alignItems='center' style={{ minWidth: '750px' }}>
                <Grid item lg={8} md={8} sm={12}>
                    <Card>
                        <CardContent style={{ minWidth: '600px', textAlign: 'center' }}>
                            <h1>{results[0]}'s Score</h1>
                            <div className='results'>
                                <Radar
                                    config={{
                                        data: {
                                            labels: ['eyebrows', 'eyes', 'nose', 'mouth', 'upperJawline', 'midJawline'],
                                            datasets: [{
                                                data: [
                                                    results[1],
                                                    results[2],
                                                    results[3],
                                                    results[4],
                                                    results[5],
                                                    results[6],
                                                ],
                                            }],
                                        },
                                        options: {
                                            dotSize: .8,
                                            showLabels: true,
                                            ticksCount: 10,
                                            fontFamily: 'roboto',
                                            unxkcdify: true,
                                        }
                                    }}
                                />
                            </div>
                        </CardContent>
                        <CardActions style={{ justifyContent: 'center' }}>
                            <a href='/' target='_blank' rel='noopener noreferrer'><NavButton
                                text='Try it yourself'
                            /></a>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Results);
