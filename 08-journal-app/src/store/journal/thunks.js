import { collection, doc, setDoc, deleteDoc} from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";

export const startNewNote = () => {

    return async( dispath, getState ) => {

        dispath(savingNewNote());

        const {uid} = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: []
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

export const startSaveNote = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = {...note};
        delete noteToFireStore.id;
        
        const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
        await setDoc( docRef, noteToFireStore, { merge: true });

        dispatch( updateNote(note) );

    }
};

export const startUploadingFiles = (files = []) => {
    return async(dispatch) => {

        dispatch( setSaving() );

        const fileUploadsPromise = [];

        for (const file of files) {
            fileUploadsPromise.push( await fileUpload(file) );
        }

        const photoURLS = await Promise.all( fileUploadsPromise );

        dispatch( setPhotosToActiveNote( photoURLS ));

    }
};

export const startDeletingNote = () => {
    return async(dispatch, getState) => {
        const {uid} = getState().auth;
        const {active:note} = getState().journal;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
        console.log(docRef)
        await deleteDoc(docRef);

        dispatch( deleteNoteById(note.id))
    }
};