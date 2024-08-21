import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"

import { ImageGalery } from "../components/ImageGalery"
import { useForm } from "../../hooks/useForm";
import { setActiveNote } from "../../store/journal";



export const NoteView = () => {

  const {active: note} = useSelector(state => state.journal);
  const dispatch = useDispatch()

  const {date, body, title, onInputChange, formState} = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date( date );
    return newDate.toUTCString().slice(0,25);
  }, [date]);


  useEffect(() => {
    dispatch( setActiveNote(formState) );
  }, [formState])
  

  const onSaveNote = () => {
    
  }

  return (
    <Grid container direction='row' justifyContent='space-around' alignItems='center' sx={{ mb:1}}>

        <Grid item>
            <Typography fontSize={ 39 } fontWeight='loght'>{dateString}</Typography>
        </Grid>

        <Grid item>
          <Button color="primary" sx={{ padding: 2 }} onClick={onSaveNote}>
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
            name="title"
            value={title}
            onChange={onInputChange}
            sx={{border: 'none', mb:1}}
          />

          <TextField 
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="¿Que sucedio hoy?"
            name="body"
            value={body}
            onChange={onInputChange}
            minRows={ 5 }
          />
        </Grid>

        <ImageGalery />
    </Grid>
  )
}
