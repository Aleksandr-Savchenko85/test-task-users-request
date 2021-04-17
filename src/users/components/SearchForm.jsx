import React from 'react';

const SearchForm = () => {
    
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
                   
                />
            </div>
            <button className="submit-button" type="submit" >Submit</button>
            <div className="error-text"></div>
        </form>
    
        
    )
};



export default SearchForm;