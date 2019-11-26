import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button } from '@material-ui/core';

export class Copy extends Component {

    state = {
        copied: false,
    };

    render() {
        return (
            <div>
                <CopyToClipboard text={this.props.value}
                    onCopy={() => this.setState({ copied: true })}>
                    <Button
                        variant='outlined'
                        color='primary'
                    >Copy to clipboard.</Button>
                </CopyToClipboard>

                {this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
            </div>
        )
    }
}

export default Copy;
