import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./journalSlice";
import { loadNotes } from "../../helpers";

export const startNewNote = () => {

    return async( dispath, getState ) => {

        dispath(savingNewNote());

        const {uid} = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        };

        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes`));

        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispath( addNewEmptyNote(newNote) );
        dispath( setActiveNote(newNote) );
    }

};


export const startLoadingNotes = () => {
    return async(dispath, getState) =>{
        const {uid} = getState().auth;
        const notes = await loadNotes(uid);

        dispath( setNotes(notes) )
    }

};