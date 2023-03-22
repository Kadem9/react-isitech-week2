import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { app } from "../firebase.config";

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [succes, setSucces] = useState(false);
    const [succesMsg, setSuccesMsg] = useState("");
    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const changePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirm(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Je vérifie que les deux mots de passe sont identiques
        if (password !== passwordConfirm) {
            // TODO : Ajouter un message d'erreuR
            setError(true);
            setErrorMsg("Les mots de passe ne sont pas identiques");
            return;
        }
        const auth = getAuth(app);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setSucces(true);
                setError(false);
                setSuccesMsg("Inscription réussie !");
            })
            .catch((error) => {
                const errorCode: string = error.code;
                setError(true);
                setErrorMsg(error.code);
                // ..
            });
    };

    return (
        <main className="container">
            <h1 className="text-4xl">Inscrivez-vous !</h1>

            {error === true && (
                <div
                    className="bg-red-100 border-t-4 border-red-500 rounded-b text-teal-900 px-4 py-3 shadow-md mt-4"
                    role="alert"
                >
                    <div className="flex">
                        <div className="py-1">
                            <svg
                                className="fill-current h-6 w-6 text-red-500 mr-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold">Une erreur est survenue</p>
                            <p className="text-sm">{errorMsg}</p>
                        </div>
                    </div>
                </div>
            )}

            {succes === true && (
                <div
                    className="bg-green-100 border-t-4 border-green-500 rounded-b text-teal-900 px-4 py-3 shadow-md mt-4"
                    role="alert">
                    <div className="flex">
                        <div className="py-1">
                            <svg
                                className="fill-current h-6 w-6 text-black-500 mr-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold">Information</p>
                            <p className="text-sm">{succesMsg}</p>
                        </div>
                    </div>
                </div>
            )}

            <form className="flex flex-col mt-8" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    className="border-solid border-2 border-neutral-300 p-2"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={changeEmail}
                />
                <label className="mt-4" htmlFor="password">
                    Mot de passe
                </label>
                <input
                    className="border-solid border-2 border-neutral-300 p-2"
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={changePassword}
                />
                <label className="mt-4" htmlFor="passwordRepeat">
                    Confirmez votre mot de passe
                </label>
                <input
                    className="border-solid border-2 border-neutral-300 p-2"
                    type="password"
                    name="passwordRepeat"
                    id="passwordRepeat"
                    value={passwordConfirm}
                    onChange={changePasswordConfirm}
                />
                <button className="bg-blue-500 text-white p-2 rounded mt-3">
                    S'inscrire
                </button>
            </form>
        </main>
    );
};
