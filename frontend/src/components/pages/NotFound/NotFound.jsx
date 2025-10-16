import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 text-center">404 - Página No Encontrada</h1>
            <Link to="/">
                <button className="bg-blue-500 text-white mx-5 my-2 py-1 rounded-lg hover:bg-blue-600 transition duration-300 w-32 h-8">Volver al Inicio</button>
            </Link>
        </div>
    )
}
export default NotFound;