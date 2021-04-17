import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../users.actions';
import { getUsersList } from "./gateway";
//import axios from 'axios';
//import {getExceptionsOrders} from './gateway';

const Table = () => {
    const dispatch = useDispatch();
     const [persons, setPersons] = useState([])

    //  useEffect(() => {
    //      dispatch(getUsers());
    // }, [dispatch]);

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
