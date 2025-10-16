import useInput from './../../customHooks/useInput.jsx';
import { useContext } from 'react';
import { UserContext } from './../../../store/UserContext.jsx';

function RegisterPage() {
    const email = useInput('');
    const password = useInput('');
    const confirmPassword = useInput('');
    const { register } = useContext(UserContext);

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password || !confirmPassword) {
            alert('Por favor, completa todos los campos');
            return;
        }
        if (password.value.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            return;
        }
        if (password.value !== confirmPassword.value) {
            alert('Las contraseñas no coinciden');
            return;
        }
        register(email.value, password.value);
        alert('Registro exitoso');
    }
    return (
        <form className="max-w-md mx-auto my-10 p-6 border border-gray-300 rounded-xl bg-blue-300">

            <h2 className="text-2xl font-bold mb-6 text-center">Formulario de registro</h2>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Correo Electrónico</label>
                <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder="email@example.com"
                    {...email}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder="********"
                    {...password}
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="password">Confirmar contraseña</label>
                <input
                    type="password"
                    id="confirm-password"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    placeholder="********"
                    {...confirmPassword}
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
                onClick={handleSubmit}
            >
                Registrarse
            </button>
        </form>
    );
}

export default RegisterPage;