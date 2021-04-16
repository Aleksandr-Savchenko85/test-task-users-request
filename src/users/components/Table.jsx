import React, { useState, useEffect } from "react";
import axios from 'axios';


const Table = () => {
    const [persons, setPersons] = useState([])
    
 

    useEffect(() => {
        axios.get("http://77.120.241.80:8811/api/users").then(responce => {
            const persons = responce.data;
            setPersons(persons)

        })
    }, [setPersons]);

    
    return (

        <div className="table">
            {persons.map(item =>
                <div className="list-item" key={item.id}>
                    <td className="list-item__td"><h4>id: </h4>{item.id}</td>
                    <td className="list-item__td"><h4>name: </h4>{item.name}</td>
                    <td className="list-item__td"><h4>surname: </h4>{item.surname}</td>
                    <td className="list-item__td"><h4>description: </h4>{item.desc}</td>
                </div>)

            }
        </div>




    )
};


export default Table;