import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {

    try {
        
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const {displayName, email, photoURL, uid} = result.user;

        return {
            ok: true,
            displayName, email, photoURL, uid
        };
        
    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok: false,
            errorMessage, errorCode
        }

    }
};

export const registerUserWithEmailPassword = async({email, password, displayName}) => {

    try {

        const res = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = res.user;
        await updateProfile( FirebaseAuth.currentUser, { displayName });
        
        return {
            ok: true,
            uid, photoURL, email, displayName
        }
        
    } catch (error) {
        console.log(error)
        return{
            ok: false,
            errorMessage: error.message
        }

    }

};

export const loginWithEmailPassword = async (email, password) => {

    const {uid, photoURL, displayName} = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    
    try {
        return {
            ok: true,
            uid, photoURL, email, displayName

        }
        
    } catch (error) {
        console.log(error)
        return {
            ok: false,
            errorMessage: error.message
        }
    }
};

export const logOutFirebase = async () => {

    return await FirebaseAuth.signOut();

};