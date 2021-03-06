import {
    Box,
    Button,
    Divider,
    makeStyles,
    Typography,
} from '@material-ui/core';

import { ReactComponent as BankIcon } from '../../../assets/feedIcons/Bank-icon.svg';

const useStyles = makeStyles(({ breakpoints }) => ({
    mainContainer: {
        marginLeft: '91px',
        [breakpoints.down('sm')]: {
            marginLeft: '0px',
        },
    },

    heading: {
        color: '#1D9F6E',
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        [breakpoints.down('sm')]: {
            fontSize: '12px',
        },
    },

    container: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    viewAll: {
        color: '#1D9F6E',
        whiteSpace: 'nowrap',
        marginTop: '2px',
        [breakpoints.down('sm')]: {
            fontSize: ' 9px',
        },
    },

    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        boxShadow:
            'inset 3px 3px 6px #b8b9be, -3px -3px 6px #ffffff !important',
        borderRadius: '50%',
    },

    questionPara: {
        fontWeight: 600,
        paddingBottom: '25px',
    },

    questionContainer: {
        marginLeft: '1rem',
    },

    question: {
        paddingBottom: '1.5rem',
        marginTop: '1.5rem',
    },
}));

const Discussions = () => {
    const classes = useStyles();
    return (
        <Box className={classes.mainContainer}>
            <Box className={classes.container}>
                <Typography variant="h5" className={classes.heading}>
                    Top Discussions
                </Typography>
                <Button component="span" className={classes.viewAll}>
                    View All
                </Button>
            </Box>
            <Box
                display="flex"
                flexDirection="row "
                className={classes.question}
            >
                <Box>
                    <BankIcon className={classes.icon} />
                </Box>
                <Box className={classes.questionContainer}>
                    <Typography component="p" className={classes.questionPara}>
                        Why do you have to go to Indonesia ?
                    </Typography>
                    <Typography component="p">
                        by :{' '}
                        <span style={{ color: '#1D9F6E' }}>Wildan Wari</span>
                    </Typography>
                </Box>
                <Divider style={{ backgroundColor: '##DEDEDE' }} />
            </Box>

            {/* Just a repeat. Wanted to see what it would look like if there are many components */}
            <Box
                display="flex"
                flexDirection="row "
                className={classes.question}
            >
                <Box>
                    <BankIcon className={classes.icon} />
                </Box>
                <Box className={classes.questionContainer}>
                    <Typography component="p" className={classes.questionPara}>
                        Why do you have to go to Indonesia ?
                    </Typography>
                    <Typography component="p">
                        by :{' '}
                        <span style={{ color: '#1D9F6E' }}>Wildan Wari</span>
                    </Typography>
                </Box>
            </Box>
            <Divider style={{ backgroundColor: '##DEDEDE' }} />
        </Box>
    );
};

export default Discussions;
