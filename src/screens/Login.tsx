import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
        
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('vous êtes connecté')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            }
            );
    };
    

    return (
        <main className="container">
            <h1 className="text-4xl">Connectez-vous !</h1>
            <form className="flex flex-col mt-8" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input className="border-solid border-2 border-neutral-300 p-2" type="email" name="email" id="email" autoComplete="mail" onChange={changeEmail} value={email}/>
                <label className="mt-4" htmlFor="password">Mot de passe</label>
                <input className="border-solid border-2 border-neutral-300 p-2" type="password" name="password" id="password" onChange={changePassword} />
                <button className="bg-blue-500 text-white p-2 rounded mt-3">Se connecter</button>
            </form>
        </main>
    )
}