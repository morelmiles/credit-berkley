import React from 'react';
import { makeStyles, Box } from '@material-ui/core';


import Topbar from '../feed-ui/components/topBarComponent';
import Sidebar from '../feed-ui/components/sidebarComponent';
import FeedsCard from '../feed-ui/components/feedsCard';
import Discussions from '../feed-ui/components/discussions';
import ChartContainer from './components/chartContainer';
import AccountHealth from './components/accountHealth';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        minHeight: '100%',
        paddingLeft: '80px',
        [theme.breakpoints.down('lg')]: {
            paddingLeft: '60px',
        },
    },
    sidebar: {
        width: '60px',
    },
    feedContainer: {
        marginLeft: '100px',
        width: '845px',
        [theme.breakpoints.down('md')]: {
            width: '200px',
            marginLeft: '10px',
        },
    },

    descText: {
        fontSize: '18px',
        textAlign: 'left',
        color: '#1A2E35',
        marginBottom: '20px',
    },
}));
const MainFeed = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}>
            <Topbar />

            <Box display="flex" flexDirection="row">
                <div className={classes.sidebar}>
                    <Sidebar />
                </div>

                <Box className={classes.feedContainer}>
                    <Box display="flex" flexDirection="column">
                        <ChartContainer />
                        <AccountHealth    />
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default MainFeed;
