import { makeStyles, Typography, Button, Box } from '@material-ui/core';
import { format } from 'date-fns';

import img from '../../../assets/img.jpg';
import { ReactComponent as LightningIcon } from '../../../assets//feedIcons/Lightining-icon.svg';

const useStyles = makeStyles(({ breakpoints }) => ({
    feedCard: {
        paddingBottom: '40px',
        borderRadius: '10px',
        marginBottom: '20px',
        background: '#ECF3FD 0% 0% no-repeat padding-box',
        boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff !important',
    },
    cardBtn: {
        width: '135px',
        height: '42px',
        color: '#1D9F6E',
        border: '2px solid #69BEA2',
    },
    textContent: {
        margin: '0 31px ',
        [breakpoints.down('sm')]: {
            margin: '0 13px',
        },
    },

    desc: {
        [breakpoints.down('sm')]: { fontSize: '14px' },
    },

    imgCard: {
        width: 'auto',
        [breakpoints.down('sm')]: {
            width: '100%',
            height: '100%',
        },
    },

    feedIconContainer: {
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto 0',
    },

    feedIcons: {
        height: '20px',
        margin: 'auto 10px ',
    },
}));

const FeedsCard = () => {
    const classes = useStyles();
    const date = new Date();

    return (
        <Box className={classes.feedCard}>
            <img src={img} alt="" className={classes.imgCard} />

            <div className={classes.textContent}>
                <Typography
                    component="p"
                    style={{ margin: '20px 0' }}
                    className={classes.desc}
                >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                </Typography>
                <Typography
                    component="p"
                    style={{ fontSize: '9px', color: '#979797' }}
                >
                    {format(date, ' MMMM dd, yyyy')} by <b>Author Name</b>
                </Typography>
                <Typography
                    component="p"
                    style={{ margin: '25px 0', color: '#1A2E35' }}
                >
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                </Typography>
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                >
                    <Button className={classes.cardBtn}>Read More</Button>
                    <Box className={classes.feedIconContainer}>
                        <LightningIcon className={classes.feedIcons} />

                        <LightningIcon className={classes.feedIcons} />

                        <LightningIcon className={classes.feedIcons} />
                    </Box>
                </Box>
            </div>
        </Box>
    );
};

export default FeedsCard;
