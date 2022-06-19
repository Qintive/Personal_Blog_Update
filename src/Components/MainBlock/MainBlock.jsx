import React from 'react'
import { Card, Paper } from '@mui/material'
import { Button, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles"
import { ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1
    },
    paper: {
        position: 'relative',
        marginBottom: theme.spacing(4),

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    postContent: {
        position: 'relative',
        padding: theme.spacing(6),
        marginTop: theme.spacing(8)
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundOverlay: 'rgba(0,0,0,.3)'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: 1
    },
    cardGrid: {
        marginTop: theme.spacing(4)
    },
    dialogText: {
        width: '200px'
    }
}))





const MainBlock = (props) => {


    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return (

        <main>
            <Paper style={{ backgroundImage: `url(https://www.bdfcommunication.it/wp-content/uploads/2015/04/backgroud-bdf-sito.jpg)` }}
                className={classes.paper}>
                <Container fixed>
                    <div className={classes.overlay} />
                    <Grid container>
                        <Grid item md={6}>
                            <div className={classes.postContent}>
                                <Typography component='h1' variant='h3' color='white' gutterBottom >
                                    Web Developer Block
                                </Typography>
                                <Typography component='h5' color='white' paragraph >
                                    Web Developer Block Web Developer Block
                                    Web Developer BlockWeb Developer Block
                                    Web Developer Block Web Developer Block
                                </Typography>
                                <Button variant='contained' color='secondary'>
                                    Learn More
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
            <div>
                <Container maxWidth='md' className={classes.mainBlock}>
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom >
                        Web Developer Blog
                    </Typography>
                    <Typography variant='h5' align='center' color='textSecondary' paragraph >
                        Web Developer Blog. How I learn React and material UI.
                        It was so hard but interesting.
                    </Typography>
                    <div className={classes.mainButton}>
                        <Grid container spacing={5} justifyContent="center" style={{ minHeight: '5vh' }}>
                            <Grid item>
                                <NavLink to='/startNow'>
                                    <Button variant='contained' color='primary' >Start Now</Button>
                                </NavLink>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary' >Learn More</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth='md'>
                <Grid container spacing={4}>
                    {props.cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia className={classes.cardMedia}
                                    image={card.photos} title='image title' />
                                <CardContent className={classes.cardContent}>
                                    <Typography variant='h5' gutterBottom>
                                        {card.title}
                                    </Typography>
                                    <Typography>
                                        Blog post. This blog post. Read more ...
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small' color='primary' variant="outlined" onClick={handleClickOpen}>
                                        View
                                    </Button>
                                    <Button size='small' color='primary'>
                                        Edit
                                    </Button>
                                </CardActions>
                            </Card>
                            <Button><ThumbUpAltOutlined /></Button>
                            <Button> <ThumbDownAltOutlined /></Button>
                        </Grid>
                    )
                    )}
                </Grid>
                <Dialog
                    open={open}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle> { } </DialogTitle>
                        <DialogContent>
                            <DialogContentText className={classes.dialogText} id="alert-dialog-slide-description">
                                В разработке...
                            </DialogContentText>
                        </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={handleClose}>Agree</Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </main>
    )
}

export default MainBlock;

