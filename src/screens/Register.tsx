import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react';


export const Register = () => {

    const auth = getAuth();
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e)

        const [email, setEmail] = useState()
        const [password, setPassword] = useState()

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
    return(
        <main className="container">
            <h1 className="text-4xl">Inscrivez-vous !</h1>
            <form className="flex flex-col mt-8" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input className="border-solid border-2 border-neutral-300 p-2" type="email" name="email" id="email" />
                <label className="mt-4" htmlFor="password">Mot de passe</label>
                <input className="border-solid border-2 border-neutral-300 p-2" type="password" name="password" id="password" />
                <label className="mt-4" htmlFor="password">Confirmez votre mot de passe</label>
                <input className="border-solid border-2 border-neutral-300 p-2" type="password" name="password" id="password" />
                <button className="bg-blue-500 text-white p-2 rounded mt-3">S'inscrire</button>
            </form>
        </main>
    )
}