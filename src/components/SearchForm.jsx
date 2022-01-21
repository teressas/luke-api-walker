import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SearchForm = (props) => {

    const [items, setItems] = useState([]);
    const [id, setId] = useState("1");
    // does this set the select item to 1st value?
    const [selectedItem, setSelectedItem] = useState(items[0]);

    const history = useHistory();

    // axios uses response.data, fetch uses results
    useEffect(() => {
        axios.get('https://swapi.dev/api/')
            .then(response => {
                // console.log(response.data);
                // use Object.keys to pull keys in object
                const arrayObj = Object.keys(response.data);
                console.log(arrayObj);
                setItems(arrayObj)})
    }, []);

    const searchItem = (e) => {
        e.preventDefault()
        console.log(selectedItem);
        console.log(id)
        // takes you to the route after form submission        
        history.push(`/${selectedItem}/${id}`)
    }
    
    // {JSON.stringify(items)}
    return <div>
        <form onSubmit={ searchItem }>
            <label>Search For:</label>
            <select value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
                {items.map( (item, i) =>
                    <option key={i} value={item}>{item}</option>    
                )}
            </select>
            <input type="number" onChange={ (e) => setId(e.target.value)} value={id}/>
            <button>Search</button>
            
        </form>
    </div>;
};

export default SearchForm;
