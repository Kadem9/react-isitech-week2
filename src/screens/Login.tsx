export const Login = () => {
    return (
        <main className="container">
            <h1 className="text-4xl">Connectez-vous !</h1>
            <form className="flex flex-col mt-8">
                <label htmlFor="email">Email</label>
                <input className="border-solid border-2 border-neutral-300 p-2" type="email" name="email" id="email" autoComplete="mail"/>
                <label className="mt-4" htmlFor="password">Mot de passe</label>
                <input className="border-solid border-2 border-neutral-300 p-2" type="password" name="password" id="password" />
                <button className="bg-blue-500 text-white p-2 rounded mt-3">Se connecter</button>
            </form>
        </main>
    )
}