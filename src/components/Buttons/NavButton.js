import React, { Component } from 'react'
import { IconButton } from "@material-ui/core";
import FootballHelmet from '../Icons/FootballHelmet';

export class NavButton extends Component {
    render() {
        return (
            <IconButton
                color='primary'
                onClick={this.props.onClick}
                disabled={this.props.disabled}
                style={this.props.style}
            >
                <FootballHelmet
                    viewBox='0 0 100 100'
                    fontSize='large'
                    color='primary'
                />
                {this.props.text}
            </IconButton>
        )
    }
}

export default NavButton;
