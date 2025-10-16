import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const pizzaSubmit = () => {
        navigate(`/pizza/${id}`);
    }

    return (
        <div>
            <input onChange={(e) => setId(e.value)} type="text" />
            <button onClick={pizzaSubmit}></button>
        </div>
    );
}

export default Home;