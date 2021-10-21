import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';

const Cards = ({ arrayCharacters }) => {    

    return(
        <>
        <h1>CARDS</h1>
        <Card>
            <CardHeader>Header</CardHeader>
            <CardBody> <h2>{arrayCharacters[0].name}</h2> </CardBody>
            <CardFooter>Footer</CardFooter>
        </Card> 
        
        </>
    );        
};

export default Cards;

