import React from 'react';
import {
    makeStyles,
    Grid,
    Box,
    useTheme,
    useMediaQuery,
} from '@material-ui/core';

import Sidebar from '../feed-ui/components/sidebarComponent';
import MessengerTopBar from './components/messengerTopBar';
import MessengerSideBar from './components/messengerSideBar';
import MessengerChat from './components/messengerChat';
import MessengerMobile from './components/messengerMobile';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        height: '100%',
        background: '#ECF3FD 0% 0% no-repeat padding-box',
    },

    sidebar: {
        width: '215px',
        alignItems: 'center',
        marginTop: '50px',
        alignContent: 'center',
    },

    messengerArea: {
        display: 'flex',
        marginTop: '200px',
        flexDirection: 'row',
    },

    chatContainer: {
        boxShadow: ' 6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
        marginLeft: '100px',
    },
}));

const Messenger = () => {
    const classes = useStyles();

    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('sm'));

    return (
        <>
            {isMobile ? (
                <MessengerMobile />
            ) : (
                <Box
                    className={classes.mainContainer}
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                >
                    <div className={classes.sidebar}>
                        <Sidebar />
                    </div>
                    <MessengerTopBar />
                    <Grid md={12} lg={12} className={classes.messengerArea}>
                        <div>
                            <MessengerSideBar />
                        </div>
                        <div className={classes.chatContainer}>
                            <MessengerChat />
                        </div>
                    </Grid>
                </Box>
            )}
        </>
    );
};

export default Messenger;
