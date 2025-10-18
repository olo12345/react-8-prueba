import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {

    const [email, setEmail] = useState(null);
    const [token, setToken] = useState("");

    function register(email, password) {
        fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then(res => res.json())
            .then(data => {
                alert(data?.error || "¡Registro exitoso!");
                setToken(data.token)
                localStorage.setItem("token", token)
                setEmail(data.email)
            })
            .catch(error => console.error("ocurrió un error", error))
    }

    function getProfile() {
        setToken(localStorage.getItem("token"));
        if (token) {
            fetch("http://localhost:5000/api/auth/me", {
                method: "GET",
                headers: {
                    Authorization: `Bearer: ${token}`,
                },
            })
                .then(res => res.json())
                .then(data => {
                    setEmail(data.email)
                    // console.log("getprofiledata", data, "getprofiletoken", token)
                    return data
                })
                .catch(error => console.error('Error al buscar usuario', error))
        }
    }

    function logout() {
        setEmail(null);
        setToken(false);
        alert('Logout exitoso');
    }

    function login(email, password) {
        fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then(res => res.json())
            .then(data => {
                alert(data?.error || "¡Login exitoso!");
                setToken(data.token)
                // console.log("logindata", data)
                localStorage.setItem("token", data.token)
            })
    }

    return (
        <UserContext.Provider value={{ email, register, login, logout, getProfile, token }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;

export { UserContext }