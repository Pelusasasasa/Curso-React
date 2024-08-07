import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGalery } from "../components/ImageGalery"

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-around' alignItems='center' sx={{ mb:1}}>

        <Grid item>
            <Typography fontSize={ 39 } fontWeight='loght'>28 De Agosto, 2023</Typography>
        </Grid>

        <Grid item>
          <Button color="primary" sx={{ padding: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr:1 }}/>
            Guardar
          </Button>
        </Grid>

        <Grid container>
          <TextField 
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingrese un titulo"
            label="Titulo"
            sx={{border: 'none', mb:1}}
          />

          <TextField 
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="¿Que sucedio hoy?"
            minRows={ 5 }
          />
        </Grid>

        <ImageGalery />
    </Grid>
  )
}
