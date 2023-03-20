import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react';
import { auth } from '../firebase';

export const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const auth = getAuth();
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
       
        // Je vérifie que les deux mots de passe sont identiques
        if(password !== passwordConfirm) {
         // TODO : Ajouter un message d'erreur
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode:string = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    const changeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const changePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const changePasswordConfirm = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirm(e.target.value)
    }

    return(
        <main className="container">
            <h1 className="text-4xl">Inscrivez-vous !</h1>
            <form className="flex flex-col mt-8" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input className="border-solid border-2 border-neutral-300 p-2" type="email" name="email" id="email" value={email} onChange={changeEmail}/>
                <label className="mt-4" htmlFor="password">Mot de passe</label>
                <input className="border-solid border-2 border-neutral-300 p-2" type="password" name="password" id="password" value={password} onChange={changePassword}/>
                <label className="mt-4" htmlFor="password">Confirmez votre mot de passe</label>
                <input className="border-solid border-2 border-neutral-300 p-2" type="password" name="password" id="password" value={passwordConfirm} onChange={changePasswordConfirm}/>
                <button className="bg-blue-500 text-white p-2 rounded mt-3">S'inscrire</button>
            </form>
        </main>
    )
}