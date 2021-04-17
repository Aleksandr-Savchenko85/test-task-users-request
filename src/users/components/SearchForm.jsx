import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createUser} from '..//users.actions';

const SearchForm = () => {
    const [name, setName] = useState("");
    /* const [surname, setSurName] = useState("");
    const [desc, setDesc] = useState(""); */
    const dispatch = useDispatch();

    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(createUser({
            name,
            surname: '555555',
            desc: '5558885'
            
        }))
    }

    const handleChange = event =>{
        const {name, value} = event.target;
        setName(value)

    }
       
    
    
    return (
        <form className="login-form">
            <h1 className="form-title">Create user</h1>
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
                    name="description"
                    placeholder="enter description"
                    onChange={handleChange}
                   
                />
            </div>
            <button className="submit-button" type="submit" onClick={handleSubmit} >Create</button>
            <div className="error-text"></div>
        </form>
    
        
    )
};



export default SearchForm;