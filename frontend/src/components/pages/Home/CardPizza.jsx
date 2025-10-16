import { useContext } from "react";
import { CartContext } from "./../../../store/CartContext.jsx";
import { Link } from "react-router-dom";

function CardPizza(pizza) {
    const { name, price, ingredients, img, id} = pizza
    const { addToCart } = useContext(CartContext)

    function IngredientsList() {
        return ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
        ));
    }
    return (
        <>
            <div className="card flex flex-col bg-white shadow-md rounded-lg m-2 mb-4">
                <img src={img} alt={name} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <h3 className="capitalize text-xl font-semibold mb-2 ml-4 text-center">{name}</h3>
                <hr className="text-gray-400" />
                <p className="text-center text-gray-400">Ingredientes:</p>
                <ul className="text-gray-600 grow-1 mb-2 text-center capitalize">
                    <IngredientsList />
                </ul>
                <hr className="text-gray-400 text-center" />
                <p className="text-lg font-bold text-center">Precio: ${price.toLocaleString("es-CL")}</p>
                <div className="flex flex-row items-center">
                <button className="bg-gray-200 text-blue-700 mx-5 my-2 py-1 rounded-lg hover:bg-gray-300 transition duration-300 w-full">
                    <Link to={"/pizza/" + id} >Ver más</Link>
                </button>
                <button onClick={() => addToCart(pizza)} className="bg-blue-500 text-white mx-5 my-2 py-1 rounded-lg hover:bg-blue-600 transition duration-300 w-full active:bg-blue-800">
                    Agregar al carrito
                </button>
                </div>
            </div>
        </>
    )
}

export default CardPizza;