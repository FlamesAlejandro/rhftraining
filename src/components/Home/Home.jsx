import React, { useEffect, useState } from "react";
import { LoadPersonajes } from "../../js/app/personajes";
import { HomeContext } from "./context/HomeContext";
import Formulario from "./partial/Formulario";
import Pozo from "./partial/Pozo";

const Home = () => {
    const [personajes, setPersonajes] = useState(null);

    const [pozitos, setPozitos] = useState([]);

    useEffect(() => {
        const llenarPersonajes = async () => {
            const personajesSaved = await LoadPersonajes();
            setPersonajes(personajesSaved);
        };
        llenarPersonajes();
    }, []);

    return (
        <HomeContext.Provider value={{ personajes, pozitos, setPozitos }}>
            {!!!personajes ? (
                <h2>Loading...</h2>
            ) : (
                <>
                    <Formulario />
                    <Pozo />
                </>
            )}
        </HomeContext.Provider>
    );
};

export default Home;
