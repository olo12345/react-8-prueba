import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./../../../store/CartContext.jsx";
import { PizzasContext } from "./../../../store/PizzasContext.jsx";

function Pizza() {
    const pizzaId = useParams().id;
    const { addToCart } = useContext(CartContext);
    const { pizza, fetchPizzaById } = useContext(PizzasContext);

    useEffect(() => {
        fetchPizzaById(pizzaId);
    }, [fetchPizzaById, pizzaId] )

    return (
        <div className="mx-auto w-full text-center">
            <h1 className="capitalize text-5xl my-6">{pizza.name}</h1>
            <img className="mx-auto border-2 rounded-2xl mb-6" src={pizza.img} alt={pizza.name} />
            <p className="mb-3">{pizza.desc}</p>
            <p className="text-2 mb-3">Price: ${Number(pizza.price).toLocaleString("es-CL")}</p>
            <p className="mb-3">Ingredientes: {pizza.ingredients && pizza.ingredients.join(', ')}</p>
            <button onClick={() => addToCart(pizza)} className="bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white mb-3 active:bg-blue-800">Agregar al carrito</button>
        </div>
    )
}

export default Pizza;