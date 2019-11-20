import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardActions, CardContent } from '@material-ui/core';
import NavButton from '../Buttons/NavButton';
import NavStepper from '../NavStepper/NavStepper';
import { Radar } from 'chart.xkcd-react';
import './Individual.css';

export class Individual extends Component {
    render() {
        return (
            <div>
                <CardContent>
                    <div className='graph'>
                        <Radar
                            config={{
                                data: {
                                    labels: ['eyebrows', 'eyes', 'nose', 'mouth', 'upperJawline', 'midJawline'],
                                    datasets: [{
                                        data: [
                                            Math.abs(Math.log(this.props.reduxState.symmetryReducer.eyebrows)),
                                            Math.abs(Math.log(this.props.reduxState.symmetryReducer.eyes)),
                                            Math.abs(Math.log(this.props.reduxState.symmetryReducer.nose)),
                                            Math.abs(Math.log(this.props.reduxState.symmetryReducer.mouth)),
                                            Math.abs(Math.log(this.props.reduxState.symmetryReducer.upperJawline)),
                                            Math.abs(Math.log(this.props.reduxState.symmetryReducer.midJawline)),
                                        ],
                                    }],
                                },
                                options: {
                                    dotSize: .8,
                                    showLabels: true,
                                    ticksCount: 10,
                                }
                            }}
                        />
                    </div>
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


export default connect(mapStateToProps)(Individual);