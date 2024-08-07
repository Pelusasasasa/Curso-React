import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../store/auth/authSlice";

export const Navbar = ({ drawerWidth = 240}) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( logout() );
    }

  return (
    <AppBar position="fixed" sx={{
        width: { 
            sm: `calc(100 - ${drawerWidth}px)`,
            ml: { sm: `${drawerWidth}px`}
        }
    }} >
        <Toolbar>
            <IconButton color="inherit" edge='start' sx={{ mr: 2, display: {sm: 'none'}}}>
                <MenuOutlined />
            </IconButton>
        </Toolbar>

        <Grid container direction='row' justifyContent='space-between' alignItems='center' >

            <Typography variant="h6" noWrap component='div'> Journal App </Typography>

            <IconButton color="error" onClick={onLogout}>
                <LogoutOutlined />
            </IconButton>


        </Grid>

    </AppBar>
  )
}
