import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { BottomNavigation, BottomNavigationAction, Typography } from '@mui/material';
import { Favorite, Folder, LocationCity } from '@material-ui/icons';
import RestoreIcon from '@mui/icons-material/Restore';


const useStyles = makeStyles(theme => ({

    root: {
      flexGrow: 1
    },
  }))

const Footer = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState('recents')
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <footer>
            <Typography variant='h6' gutterBottom align='center'>Footer</Typography>
            <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                <BottomNavigationAction label='Reacent' value='recents' icon={<RestoreIcon />} />
                <BottomNavigationAction label='Favorites' value='favorites' icon={<Favorite />} />
                <BottomNavigationAction label='Nerby' value='nerby' icon={<LocationCity />} />
                <BottomNavigationAction label='Folder' value='folder' icon={<Folder />} />
            </BottomNavigation>
            <Typography align='center' color='textSecondary' component='p' variant='subtitle1' >
                Web developer blog on React JS and Material UI
        </Typography>
        </footer>
    )
}

export default Footer; 