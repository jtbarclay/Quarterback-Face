import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Results extends Component {
    render() {
        return (
            <div>
                Hello!
                {atob(this.props.match.params.id).split('+').map( val => (
                    <p>{val}</p>
                ))}
                {/* {this.props.match.params.id.split('+').map(val => (
                    <p>{val}</p>
                ))} */}
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(Results);
