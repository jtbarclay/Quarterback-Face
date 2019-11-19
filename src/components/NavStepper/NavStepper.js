import React, { Component } from 'react'
import { Stepper, Step, StepLabel } from '@material-ui/core';

export class NavStepper extends Component {
    render() {

        function getSteps() {
            return ['Landing', 'Upload', 'Waiting', 'Individual', 'Comparison'];
        }

        const steps = getSteps();

        return (
            <div>
                <Stepper
                    alternativeLabel
                    activeStep={this.props.step}
                >
                    {steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>
        )
    }
}

export default (NavStepper);
