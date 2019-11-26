import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

export class Copy extends Component {

    state = {
        copied: false,
    };

    render() {
        return (
            <div>
                <input value={this.props.value}
                    onChange={({ target: { value } }) => this.setState({ value, copied: false })} />

                <CopyToClipboard text={this.props.value}
                    onCopy={() => this.setState({ copied: true })}>
                    <span>Copy to clipboard with span</span>
                </CopyToClipboard>

                <CopyToClipboard text={this.props.value}
                    onCopy={() => this.setState({ copied: true })}>
                    <button>Copy to clipboard with button</button>
                </CopyToClipboard>

                {this.state.copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
            </div>
        )
    }
}

export default Copy;
