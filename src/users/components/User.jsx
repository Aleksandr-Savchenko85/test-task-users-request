import { useDispatch } from 'react-redux';
import { removeUser, setCurrentUser } from '../../redux/users.actions';

const User = (props) => {
    const dispatch = useDispatch();

    const handleDeleteUser = (userId) => {
        dispatch(removeUser(userId));
    }

    const handleEditUser = (userId) => {
        dispatch(setCurrentUser(userId));
    }

    return (
        <li className="user">
            <button
                className="delete-btn edit-btn"
                onClick={() => handleEditUser(props.id)}
            >
                edit
            </button>
            <button
                className="delete-btn"
                onClick={() => handleDeleteUser(props.id)}
            >
                delete
            </button>
            <span className="user__id sp">
                <span className="color-letter">ID:</span>
                {props.id}
            </span >
            <span className="user__name sp">
                <span className="color-letter">Name:</span>
                {props.name}
            </span>
            <span className="user__surname sp">
                <span className="color-letter">Surname:</span>
                {props.surname}
            </span>
            <span className="user__desc sp">
                <span className="color-letter">Description:</span>
                {props.desc}
            </span>
        </li>
    )
}

export default User;
