import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DisplayPeople = (props) => {
    const [person, setPerson] = useState({});
    const { id } = useParams();

    // axios uses response.data, fetch uses results
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                //successful
                setPerson(response.data)
            })
            // .then(response => console.log(response.data))
            .catch(err => {
                console.log(err);
                setPerson(null)
                //not successful
            })
    }, [id]);

    return (
        <div>
            {
                person ? (
                    <div>
                        <h1>{person.name}</h1>
                        <h3>Height: {person.height}</h3>
                        <h3>Mass: {person.mass}</h3>
                        <h3>Hair Color: {person.hair_color}</h3>
                        <h3>Skin Color: {person.skin_color}</h3>:
                    </div>
                ):
                <h3>No Results</h3>
            }

        </div>
    )
}

export default DisplayPeople;

