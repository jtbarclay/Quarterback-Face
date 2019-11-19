import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Microlink from '@microlink/react'



export default function About() {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = scrollType => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
    }, [open]);

    return (
        <div>
            <Button variant='outlined' color='secondary' onClick={handleClickOpen('paper')}>What is this?</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
            >
                <DialogTitle>About</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <Microlink url='https://www.si.com/nfl/2016/02/02/nfl-quarterbacks-attractive-your-brain-on-sports' size='large' style={{margin: '20px'}} />
                    <Microlink url='https://nypost.com/2016/02/07/science-proves-it-quarterbacks-arent-the-hottest-guys-on-the-team/' size='large' style={{margin: '20px'}} />
                    <Microlink url='https://www.wsj.com/articles/SB10001424052970203706604574378733451557884' size='large' style={{margin: '20px'}} />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='secondary'>
                        Close
            </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
