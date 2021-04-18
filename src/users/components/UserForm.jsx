import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSetState } from '../../hook/useSetState';

import { createUser, editUser, clearCurrentUser } from '../../redux/users.actions';

const initialState = {
    name: '',
    surname: '',
    desc: '',
}

const UserForm = () => {
    const currentUser = useSelector(state => state.users.currentUser);

    const isEditFormStatus = Boolean(currentUser);
    const [state, setState] = useSetState(initialState);

    useEffect(() => {
        if (currentUser) {
            setState({
                name: currentUser.name,
                surname: currentUser.surname,
                desc: currentUser.desc,
            })
        }
    }, [currentUser, setState]);

    const dispatch = useDispatch();

    const handleSubmit = (ev) => {
        ev.preventDefault();

        if (isEditFormStatus) {
            dispatch(editUser({
                ...state,
                id: currentUser.id,
            }))
            dispatch(clearCurrentUser());
        } else {
            dispatch(createUser({
                ...state
            }))
        }

        setState(initialState);
    }

    const handleChange = ev => {
        const { name, value } = ev.target;
        setState({
            [name]: value,
        })
    };

    return (
        <form className="login-form" >
            <h1 className="form-title">
                {isEditFormStatus ? 'Edit user' : 'Create user'}
            </h1>
            <div className="form-control">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                    className="form-input"
                    type="name"
                    id="name"
                    value={state.name}
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
                    value={state.surname}
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
                    value={state.desc}
                    id="desc"
                    name="desc"
                    placeholder="enter description"
                    onChange={handleChange}
                />
            </div>
            <button className="submit-button" type="submit" onClick={handleSubmit}>
                {isEditFormStatus ? 'Edit' : 'Create'}
            </button>
        </form>
    )
};

export default UserForm;
