import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal'

export const SideBarItem = ({ title = '', body = '', id = '', date }) => {

    const dispatch = useDispatch();

    const newTitle = useMemo(() => {
        if (title.length > 17) {
            return title.substring(0, 17) + '...'
        }else{
            return title;
        }
    }, [title]);

    const onClickNote = () => {
        dispatch( setActiveNote({title, body, id, date}) );
    }

  return (
    <ListItem disablePadding>
        <ListItemButton onClick={onClickNote}>  
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
