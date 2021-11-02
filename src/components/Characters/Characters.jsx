import { useEffect, useState } from "react";
import { getAllCharacters } from "../../services/getCharacters";
import Cards from "../Cards/Cards";

const Characters = () => {
    const [datos, setDatos] = useState([]);

    useEffect( () => {
        getAllCharacters(setDatos);
        // console.log(datos);
    }, []);

    return (
        <>
            <h1>Rick &amp; Morty</h1>
            <Cards arrayCharacters={datos} />
        </>
    );    
};

export default Characters;