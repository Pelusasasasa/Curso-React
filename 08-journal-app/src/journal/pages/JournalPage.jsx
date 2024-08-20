import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";

import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { startNewNote } from "../../store/journal/thunks";
import { useDispatch, useSelector } from "react-redux";


export const JournalPage = () => {

  const status = useSelector(state => state.journal);
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch( startNewNote() )
  }

  return (
    <JournalLayout>

      {
        status.active
        ? <NoteView />
        : <NothingSelectedView />
      }
      {/* <NothingSelectedView /> */}
      {/* <NoteView /> */}


      <IconButton
       size="large"
       sx={{
        color: 'white',
        backgroundColor: 'error.main',
        ':hover': {backgroundColor: 'error.main', 'opacity': 0.9},
        position: 'fixed',
        right: 50,
        bottom: 50
       }}
       disabled={status.isSaving}
       onClick={onClickNewNote}
       >

        <AddOutlined sx={{fontSize: 30}} />

      </IconButton>

    </JournalLayout>
  )
}
