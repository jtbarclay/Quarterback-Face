import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardActions, CardContent, CardMedia } from '@material-ui/core';
import NavButton from '../Buttons/NavButton';
import NavStepper from '../NavStepper/NavStepper';
import './Upload.css';

export class Upload extends Component {
    state = {
        image: null,
        img: false,
    }

    // handler for file upload
    handleInput = (event) => {
        console.log(event.target.files[0]);
        this.setState({
            image: event.target.files[0],
            img: URL.createObjectURL(event.target.files[0]),
        })

    }

    handleClick = () => {

        if(this.state.image) {
        const formData = new FormData();
        formData.append('fileUpload', this.state.image);

        this.props.dispatch({ type: 'UPLOAD_PICTURE', payload: formData })
        } else {
            window.alert('Please select a photo.')
        }
    }

    render() {
        return (
            <div className='upload'>
                <CardContent>
                    {this.state.img ? (
                        <CardMedia>
                            <img src={this.state.img} alt='userImg' className='userImg' />
                        </CardMedia>
                    ) : (
                            <input type='file' name='image' accept='image/*' onChange={this.handleInput} />
                        )}
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
                        onClick={this.handleClick}
                        // onClick={() => this.props.dispatch({ type: 'NEXT_PAGE' })}
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


export default connect(mapStateToProps)(Upload);
