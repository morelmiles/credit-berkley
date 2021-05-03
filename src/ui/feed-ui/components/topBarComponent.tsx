import React from 'react';
import {
    Grid,
    makeStyles,
    Box,
    IconButton,
} from '@material-ui/core';
import { ReactComponent as Hamburger } from '../../../assets/feedIcons/hamburger.svg';
import { ReactComponent as LightningIcon } from '../../../assets/feedIcons/Lightining-icon.svg';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '110px',
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        minHeight: '100%',
        paddingTop: '62.25px',
    },
    hamburgerContainer: {
        height: '57px',
        width: '57px',
    },
    hamburger: {
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        borderRadius: '50%',
    },
    inputContainer: {
        width: '852px',
        borderRadius: '10px',
        marginLeft: '115px',
        display: 'flex',
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        flexDirection: 'row',
        height: '110px',
    },
    input: {
        marginLeft: '100px',
        height: '75px',
        border: 'none',
        borderRadius: '10px',
        paddingLeft: '15px ',
        width: '541.38px',
        boxShadow:
            'inset 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },
    emojiButtons: {},
    emojiContainer: {
        display: 'flex',
        justifyItems: 'flex-start',
        flexDirection: 'row',
        marginLeft: '127px',
        width: '10px',
    },
    dropDownContainer: {
        marginLeft: '125px',
        display: 'flex',
        flexDirection: 'row',
    },
    dropdownButtons: {
        marginLeft: '61px',
        width: '57px',
        marginTop: '30px',
        height: '57px',
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },
}));

const Topbar = () => {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            flexDirection="row"
            p={1}
            className={classes.mainContainer}
        >
            <div className={classes.hamburgerContainer}>
                <IconButton className={classes.hamburger}>
                    <Hamburger />
                </IconButton>{' '}
            </div>
            <Grid className={classes.inputContainer}>
                <input
                    color="inherit"
                    className={classes.input}
                    placeholder="Ask a question or Post a comment"
                />

                <Box p={1} m={1} display="flex" flexDirection="row">
                    <IconButton className={classes.emojiButtons}>
                        <LightningIcon />
                    </IconButton>
                    <IconButton className={classes.emojiButtons}>
                        <LightningIcon />
                    </IconButton>
                    <IconButton className={classes.emojiButtons}>
                        <LightningIcon />
                    </IconButton>
                </Box>
            </Grid>

            <Box className={classes.dropDownContainer}>
                <IconButton className={classes.dropdownButtons}>
                    <LightningIcon />
                </IconButton>
                <IconButton className={classes.dropdownButtons}>
                    <LightningIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Topbar;