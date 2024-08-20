import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMemo } from 'react'

export const SideBarItem = ({ title, body, id }) => {

    const newTitle = useMemo(() => {
        if (title.length > 17) {
            return title.substring(0, 17) + '...'
        }else{
            return title;
        }; 
    }, [title]);

  return (
    <ListItem disablePadding>
        <ListItemButton> 
            <ListItemIcon>
                <TurnedInNot />     
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={newTitle}/>
                <ListItemText secondary={body}/>
            </Grid>  
            </ ListItemButton>
        </ListItem>
  )
}
