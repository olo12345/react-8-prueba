import { createContext, useState, useContext } from "react";
import { pizzaCart } from "./../assets/pizzas.js";
import { UserContext } from "./UserContext.jsx";


const CartContext = createContext()


function CartProvider({ children }) {
    const [cart, setCart] = useState(pizzaCart)
    const total = cart.reduce((totalTemp, pizza) => totalTemp + (pizza.price * pizza.count), 0)
    const { token } = useContext(UserContext);

    function addToCart(pizza) {
        if (!pizza || !pizza.id) return
        const index = cart.findIndex(item => item.id.toUpperCase() === pizza.id.toUpperCase())
        if (index === -1) {
            setCart(prevCart => [...prevCart, { ...pizza, count: 1 }])
        } else {
            setCart(prevCart => prevCart.map((item, i) => {
                return i !== index ? item : { ...item, count: item.count + 1 }
            }
            ))
        }
    }

    function restarCount(id) {
        const index = cart.findIndex(pizza => pizza.id === id)
        if (cart[index].count === 1) {
            setCart(prevCart => prevCart.filter((pizza, i) => i !== index
            ))
            return
        }
        setCart(prevCart => prevCart.map((pizza, i) => {
            return i !== index ? pizza : { ...pizza, count: pizza.count - 1 }
        }
        ))
    }

    function sumarCount(id) {
        const index = cart.findIndex(pizza => pizza.id === id)
        setCart(prevCart => prevCart.map((pizza, i) => {
            return i !== index ? pizza : { ...pizza, count: pizza.count + 1 }
        }
        ))
    }

    function checkout() {
        fetch("http://localhost:5000/api/checkouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                "cart": cart
            }),
        })
            .then(res => res.json())
            .then(data => {
                alert(data?.error || "Carrito enviado con éxito");
                setCart([])
            })
            .catch(error => console.error("ocurrió un error", error))
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, total, restarCount, sumarCount, checkout }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export { CartContext }