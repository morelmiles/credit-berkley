import React from 'react';

import { makeStyles, Box, Typography, Divider } from '@material-ui/core';

import placeholderImage from '../../../assets/person.jpg';

const useStyles = makeStyles(() => ({
    messageContainer: {
        marginLeft: '3rem',
        marginBottom: '2rem',
        margin: '20px',
        marginTop: '1rem',
        '&::hover': {
            boxShadow:
                'inset 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        },
    },

    profileImage: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '70px',
        width: 'auto',
        padding: '1rem',
        background:
            'transparent radial-gradient(closest-side at 0% 0%, #FFFFFF9D 0%, #92929214 100%) 0% 0% no-repeat padding-box',
        boxShadow:
            'inset 3px 3px 6px #b8b9be, -3px -3px 6px #ffffff !important',
        borderRadius: '50%',
    },

    textContainer: {
        marginLeft: '3rem',
    },

    messageContent: {
        fontWeight: 600,
        paddingBottom: '25px',
    },

    message: {
        fontWeight: 600,
        paddingBottom: '25px',
        marginTop: '1rem',
    },
}));

const Messages = () => {
    const classes = useStyles();

    return (
        <div>
            <Box
                display="flex"
                flexDirection="row"
                className={classes.messageContainer}
            >
                <Box>
                    <img
                        src={placeholderImage}
                        alt=""
                        className={classes.profileImage}
                    />
                </Box>
                <Box className={classes.textContainer}>
                    <Box
                        display="flex"
                        flexDirection="row"
                        flexGrow={1}
                        justifyContent="space-between"
                    >
                        <Typography component="p">
                            <span style={{ color: '#1D9F6E' }}>
                                Wildan Wari
                            </span>
                        </Typography>
                    </Box>
                    <Typography component="p" className={classes.message}>
                        Why do you have to go to Indonesia ?
                    </Typography>
                </Box>{' '}
                <Box style={{ float: 'right', color: '#9E9E9E' }}>12:30 </Box>
            </Box>
            <Divider style={{ margin: '0 30px' }} />
        </div>
    );
};

export default Messages;
