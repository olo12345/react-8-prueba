// import { pizzaCart } from "./../../../assets/pizzas.js";
// import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "./../../../store/CartContext.jsx";
import { UserContext } from "./../../../store/UserContext.jsx";

function Cart() {

    const { cart, total, restarCount, sumarCount, checkout } = useContext(CartContext)
    const { token } = useContext(UserContext);
    const pizzaCartRender = cart.map((pizza) => (

        <div key={pizza.id} className="flex flex-row bg-white shadow-md rounded-lg m-2 mb-4 items-center">
            <img src={pizza.img} alt={pizza.name} className="h-16 object-cover rounded-2xl ml-2 my-2" />
            <h3 className="text-xl font-semibold mb-2 ml-4">{pizza.name}</h3>
            <div className="flex flex-row items-center ml-auto mr-10">
                <p className="price">Precio: ${pizza.price.toLocaleString("es-CL")}</p>
                <button id={pizza.id} onClick={(e) => restarCount(e.target.id)} className="bg-red-500 text-white mx-5 my-2 py-1 rounded-lg hover:bg-red-600 transition duration-300 w-16 h-16">-</button>
                <p className="">{pizza.count}</p>
                <button id={pizza.id} onClick={(e) => sumarCount(e.target.id)} className="bg-green-500 text-white mx-5 my-2 py-1 rounded-lg hover:bg-green-600 transition duration-300 w-16 h-16">+</button>
            </div>
        </div>
    ))

    return (
        <>
            <h2 className="text-4xl">Carrito de Compras</h2>
            <br />
            <h3 className="text-2xl">Detalles del pedido:</h3>
            <div className="cart">
                {pizzaCartRender}
            </div>
            <h3 className="ml-5 text-2xl"> Total: ${total}</h3>
            <button disabled={!token} onClick={checkout} className="bg-blue-500 disabled:bg-gray-500 text-white mx-5 my-2 py-1 rounded-lg hover:bg-blue-600 transition duration-300 w-16 h-8">Pagar</button>
        </>
    )
}

export default Cart;