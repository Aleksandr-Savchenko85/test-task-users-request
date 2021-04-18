import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, goNext, goPrev } from '../../redux/users.actions';
import User from "./User";
import Pagination from "./Pagination";

const UsersList = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const currentPage = useSelector(state => state.users.currentPage);

    const limitPerPage = 5;
    const startPage = currentPage * limitPerPage;
    const endPage = startPage + limitPerPage
    const showUsersList = users.slice(startPage, endPage);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <div className="block">
            <Pagination
                goNext={() => dispatch(goNext())}
                goPrev={() => dispatch(goPrev())}
                currentPage={currentPage}
                totalItems={users.length}
                itemsPerPage={limitPerPage}

            />
            <ul className="users">
                {showUsersList.map((user) => (
                    <User key={user.id} {...user} />
                ))}
            </ul>
        </div>
    );
}

export default UsersList;
