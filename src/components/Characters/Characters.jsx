import { useEffect, useState } from "react";
import { getAllCharacters } from "../../services/getCharacters";
import Cards from "../Cards/Cards";



const Characters = () => {
    const [datos, setDatos] = useState([]);

    useEffect( () => {
        getAllCharacters(setDatos);
    }, []);

    return (
        <>
        <h1>HOLA</h1>
        <Cards arrayCharacters={datos} />
        </>
    );    
};

export default Characters;