import {
  GO_PREV,
  GO_NEXT,
  GET_USERS,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
} from './actionTypes';
import { getUsersList, addUser, deleteUser, updateUser } from '../api/gateway';

//----GO NEXT/GO PREV ACTIONS----

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

export const setCurrentUser = (userId) => {
  return {
    type: SET_CURRENT_USER,
    payload: { userId }
  };
};

export const clearCurrentUser = () => {
  return {
    type: CLEAR_CURRENT_USER,
  };
};

//----GET ACTION-----

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

//----ADD ACTION-----

export const createUser = ({
  name,
  surname,
  desc
}) => {
  const createUserAction = user => {
    return {
      type: ADD_USER,
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

//----UPDATE ACTION----

export const editUser = ({
  id,
  name,
  surname,
  desc
}) => {
  const updateUserAction = user => {
    return {
      type: UPDATE_USER,
      payload: { user },
    }
  }
  return dispatch => {
    updateUser({
      id,
      name,
      surname,
      desc
    }).then(user => {
      dispatch(updateUserAction(user))
    })
  }
};

//----DELETE ACTION----

export const removeUser = (id) => {
  const deleteUserAction = users => {
    return {
      type: DELETE_USER,
      payload: { users },
    }
  }
  return dispatch => {
    deleteUser(id).then(users => {
      dispatch(deleteUserAction(users))
    })
  }
};
