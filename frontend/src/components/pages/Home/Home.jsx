import Header from "./Header";
import CardPizza from "./CardPizza";
// import {pizzas} from "./../../assets/pizzas.js";
import { useContext } from "react";
import { PizzasContext } from "./../../../store/PizzasContext.jsx";

function Home() {
    const {pizzas} = useContext(PizzasContext);

    const RenderPizzas = () => {
        return pizzas.map(pizza => (
            <CardPizza
                name={pizza.name}
                img={pizza.img}
                price={pizza.price}
                ingredients={pizza.ingredients}
                id={pizza.id}
                key = {new Date().getTime() + Math.random() * 1000}
            />
        ))
    }

    return (
        <div className="mx-auto w-full">
            <Header />
            <div className="gallery">
            <RenderPizzas />
            </div>

        </div>
    );
}

export default Home;