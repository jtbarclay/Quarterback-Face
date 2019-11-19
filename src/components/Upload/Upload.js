import React, { Component } from 'react'

export class Upload extends Component {
    render() {
        return (
            <div>
                <input type='file' name='image' accept='image/*' onChange={this.handleInput} />
            </div>
        )
    }
}

export default Upload;
