import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '..//users.actions';



const FormUpdate = ({ isOpen, hideForm }) => {
    const [name, setName] = useState("");
    const [surname, setSurName] = useState("");
    const [desc, setDesc] = useState("");
    const dispatch = useDispatch();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            name,
            surname: "555",
            desc: "888",

        }))
    }
    const handleChange = event => {
        const { name, value } = event.target;
        setName(value)

    };

    if (!isOpen) {
        return null
    }

    return (
        <form className="login-form">
            <button className="clouse-form-update" onClick={hideForm}>X</button>
            <h1 className="form-title">update user</h1>
            <div className="form-control">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                    className="form-input"
                    type="name"
                    id="name"
                    name="name"
                    placeholder="enter name"
                    onChange={handleChange}


                />
            </div>
            <div className="form-control">
                <label className="form-label" htmlFor="surname">Surname</label>
                <input
                    className="form-input"
                    type="text"
                    id="surname"
                    name="surname"
                    placeholder="enter surname"
                    onChange={handleChange}


                />
            </div>
            <div className="form-control">
                <label className="form-label" htmlFor="desc">Description</label>
                <input
                    className="form-input"
                    type="text"
                    id="desc"
                    name="desc"
                    placeholder="enter description"
                    onChange={handleChange}


                />
            </div>
            <button className="submit-button" type="submit" onClick={handleUpdate} >Update</button>
        </form>


    )
};



export default FormUpdate;