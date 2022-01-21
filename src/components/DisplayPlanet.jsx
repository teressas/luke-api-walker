import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DisplayPlanet = (props) => {
    const [planets, setPlanets] = useState([]);
    const { id } = useParams();

    console.log("planets");

    // axios uses response.data, fetch uses results
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {setPlanets(response.data)
            console.log(response)})
            .catch(
                err=>{
                    setPlanets(null)
                }
            )
    }, [id]);

    return <div>
        {
            planets ? (
                <>
                    <h1>{planets.name}</h1>
                    <h3>Climate: {planets.climate}</h3>
                    <h3>Terrain: {planets.terrain}</h3>
                    <h3>Surface Water: {planets.surface_water}</h3>
                    <h3>Population: {planets.population}</h3>
                </>
            ):
            <h3>No Results</h3>
        }

    </div>;
};

export default DisplayPlanet;
