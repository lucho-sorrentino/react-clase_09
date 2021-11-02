import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';

const Cards = ({ arrayCharacters }) => {    
    // console.log(arrayCharacters[0].name);    
    return (
        <>
            <h2>¿Quiénes son los personajes de la serie?</h2>                       
            {
                arrayCharacters && arrayCharacters.map( (char) => {
                    const linkStyle = {textDecoration: "none", color:"green"}
                    return (
                        <>
                            <Card>
                                <CardHeader><h3> Personaje </h3></CardHeader>                
                                <CardBody>            
                                    <>
                                        <h4> Nombre: <span>{char.name}</span> </h4>
                                        <img src={char.image} alt={char.name} />
                                        <p> <strong>¿Vive?</strong> <span>{char.status}</span> </p>
                                    </>                                                
                                </CardBody>
                                <CardFooter> 
                                    <h4>From: </h4>                                    
                                    <a style={linkStyle} href={"https://rickandmortyapi.com/"}> "The Rick and Morty API"</a>             
                                </CardFooter>
                            </Card>
                        </>
                    )
                })
            }
        </>
    )  
};

export default Cards;

