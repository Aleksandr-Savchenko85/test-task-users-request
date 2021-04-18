import React from 'react';


const FormUpdate = ({isOpen, hideForm}) => {

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
                    name="desc"
                    placeholder="enter description"
                 

                />
            </div>
            <button className="submit-button" type="submit" >Update</button>
        </form>


    )
};



export default FormUpdate;