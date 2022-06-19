import { AppBar, Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fade, IconButton, Menu, MenuItem, TextField, Toolbar, Typography } from '@mui/material';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1
    },
    menuButton: {
        position: 'relative',
        marginRight: theme.spacing(5)
    },
    title: {
        flexGrow: 1
    },
}))

const Header = () => {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null)
    };

    return (
        <>
            <AppBar position='fixed'>
                <Container fixed>
                    <Toolbar>
                        <IconButton edge='start' color='inherit' aria-label='menu' className={classes.menuButton}>
                            <MenuIcon
                                id="fade-button"
                                aria-controls="fade-menu"
                                aria-haspopup="true"
                                aria-expanded={openMenu ? 'true' : undefined}
                                onClick={handleClick} />
                            <Menu
                                id="fade-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'fade-button',
                                }}
                                anchorEl={anchorEl}
                                open={openMenu}
                                onClose={handleCloseMenu}
                                TransitionComponent={Fade}
                            >
                                <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                                <MenuItem onClick={handleCloseMenu}>Log in</MenuItem>
                                <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
                                <MenuItem onClick={handleCloseMenu}>Favorite</MenuItem>
                                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                                <MenuItem onClick={handleCloseMenu}>Nerby</MenuItem>
                            </Menu>
                        </IconButton>
                        <Typography variant='h6' mr={3} className={classes.title}>
                            Site on rect + MUI
                        </Typography>
                        <Box mr={3}>
                            <Button color='inherit' variant='outlined' onClick={handleClickOpen}> Log In </Button>
                            <Dialog open={open} onClose={handleClose} area-labellebby='form-dialog-title'>
                                <DialogTitle id='form-dialog-title'>Log in</DialogTitle>
                                <DialogContent>
                                    <DialogContentText> Log in to see videos </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin='dense'
                                        id='name'
                                        label='Enter your email'
                                        type='mail'
                                        fullWidth
                                    />
                                    <TextField
                                        autoFocus
                                        margin='dense'
                                        id='password'
                                        label='Enter your password'
                                        type='password'
                                        fullWidth
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color='primary' className={classes.buttonOnEmail}>Cancel</Button>
                                    <Button onClick={handleClose} color='primary'>Log in</Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                        <Button color='secondary' variant='contained'> Log Out </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
export default Header;