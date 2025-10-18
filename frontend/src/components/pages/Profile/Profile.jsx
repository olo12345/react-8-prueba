import { useContext } from "react";
import { UserContext } from "./../../../store/UserContext.jsx";
import { useEffect } from "react"

function Profile() {
    const { email, getProfile } = useContext(UserContext);
    const { logout } = useContext(UserContext);

    useEffect(
        () => getProfile()
        , [getProfile])

    return (
        <div className="max-w-md mx-auto my-10 p-6 border border-gray-300 rounded-xl bg-blue-300">
            <h1 className="text-3xl font-bold mb-4 text-center">Perfil de Usuario</h1>
            <p className="mx-5">Correo Electrónico: {email}</p>
            <button onClick={logout} className="bg-red-500 text-white mx-5 my-2 py-1 rounded-lg hover:bg-red-600 transition duration-300 w-32 h-8">Cerrar Sesión</button>
        </div>
    )
}

export default Profile;