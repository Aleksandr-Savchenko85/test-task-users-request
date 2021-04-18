import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { connect } from "react-redux";
import * as userActions from "../users.actions";
import { getUsers } from '../users.actions';
import User from "./User";
import Pagination from "./Pagination";

const UsersList = ({ goNext, goPrev, showForm }) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const currentPage = useSelector(state => state.users.currentPage);
  console.log(currentPage);
  let limitPerPage = 5;
  let startPage = currentPage * limitPerPage;
  let endPage = startPage + limitPerPage
  const showUsersList = users.slice(startPage, endPage);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="block">
      <Pagination
        goNext={goNext}
        goPrev={goPrev}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={limitPerPage}

      />
      <ul className="users">
        {showUsersList.map((user) => (
          <User showForm={showForm} key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
}

const mapDispatch = {
  goNext: userActions.goNext,
  goPrev: userActions.goPrev,
  // getUsers: userActions.getUsers,
};

const connector = connect(null, mapDispatch);
const Users = connector(UsersList);

export default Users;
