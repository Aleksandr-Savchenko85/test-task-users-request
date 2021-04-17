
import { GO_PREV, GO_NEXT, GET_USERS, ADD_USERS } from './actionTypes'
import { getUsersList, addUser } from './components/gateway';

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

export const createUser = ({
  name,
  surname,
  desc
}) => {
  const createUserAction = user => {
    return {
      type: ADD_USERS,
      payload: { user },
    }
  }
  return dispatch => {
    addUser({
      name,
      surname,
      desc
    }).then(user => {
      dispatch(createUserAction(user))
    })
  }
};

