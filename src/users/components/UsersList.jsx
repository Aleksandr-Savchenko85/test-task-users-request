import React from "react";
import { connect } from "react-redux";
import * as userActions from "..//users.actions";
import User from "./User";
import Pagination from "./Pagination";

const UsersList=({ users, currentPage, goNext, goPrev }) =>{
  let  itemsPerPage = 5;
  let startPage = currentPage *  itemsPerPage;
  let endPage = startPage + 5
  const showUsersList = users.slice(startPage, endPage);

    return (
      <div className="block">
        <Pagination
          goNext={goNext}
          goPrev={goPrev}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={ itemsPerPage}
        
        />
        <ul className="users">
          {showUsersList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
}

const mapState = (state) => {
  return { users: state.users.users, currentPage: state.users.currentPage };
};

const mapDispatch = {
  goNext: userActions.goNext,
  goPrev: userActions.goPrev,
};

const connector = connect(mapState, mapDispatch);
const Users = connector(UsersList);

export default Users;