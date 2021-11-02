import Axios from "axios";

const getAllCharacters = async (setDatos) => {    
    const respuesta = await Axios.get("https://rickandmortyapi.com/api/character");
    // console.log(respuesta);
    setDatos(respuesta.data.results);    
};

export {getAllCharacters};


