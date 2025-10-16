import { createContext } from "react";
import { useEffect, useState } from "react";

const PizzasContext = createContext()

function PizzasProvider({ children }) {
    const [pizzas, setPizzas] = useState([])
    const [pizza, setPizza] = useState({})
    function fetchPizzaById(pizzaId)
        {
                    fetch(`http://localhost:5000/api/pizzas/${pizzaId}`)
            .then(response => response.json())
            .then(data => setPizza(data))
            .catch(error => console.error('Error al realizar fetch de pizza del servidor:', error));
        }

    useEffect(() => {
        fetch('http://localhost:5000/api/pizzas')
            .then(response => response.json())
            .then(data => setPizzas(data))
            .catch(error => console.error('Error al realizar fetch de pizzas del servidor:', error));
    }, [])

    // useEffect(() => {
    //     fetchPizzaById(pizzaId);
    // },[])

    return (
        <PizzasContext.Provider value={{pizzas, pizza, fetchPizzaById}}>
            {children}
        </PizzasContext.Provider>
    )
}

export default PizzasProvider;

export { PizzasContext }