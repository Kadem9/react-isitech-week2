import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

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
                console.log("Vous êtes connecté.");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h1 className="text-center text-3xl font-extrabold text-gray-900">
                    Connectez-vous à votre compte
                </h1>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={changeEmail}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border 
                                  border-gray-300 placeholder-gray-500 text-gray-900 
                                  rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                                  focus:z-10 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Mot de passe
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={changePassword}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border 
                                  border-gray-300 placeholder-gray-500 text-gray-900 
                                  rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 
                                  focus:z-10 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-medium text-blue-600 hover:text-blue-500">
                                    Mot de passe oublié?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border 
                                                border-transparent rounded-md shadow-sm text-sm font-medium 
                                                text-white bg-blue-500 hover:bg-blue-600 
                                                focus:outline-none focus:ring-2 focus:ring-offset-2   focus:ring-blue-500 focus:ring-offset-blue-200">
                                Se connecter
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
