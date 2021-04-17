// import { GO_PREV, GO_NEXT, GET_USERS } from "./users.actions";
import { GO_PREV, GO_NEXT, GET_USERS } from './actionTypes'
//import axios from 'axios';
import { getUsersList } from './components/gateway';
// export const GO_PREV = "USER/PREV";
// export const GO_NEXT = "USER/NEXT";
// export const GET_USERS = "GET_USERS";
export const CREATE_USERS = "GET_USERS";
export const UPDATE_USERS = "GET_USERS";
export const DELETE_USERS = "GET_USERS";

export const goPrev = () => {
  return {
    type: GO_PREV,
  };
};

export const goNext = () => {
  return {
    type: GO_NEXT,
  };
};

export const getUsers = () => {
  const getUsersAction = usersList => {
    return {
      type: GET_USERS,
      payload: { usersList },
    }
  }

  return dispatch => {
    getUsersList()
      .then(usersList => {
        dispatch(getUsersAction(usersList))
      })
  }
};

