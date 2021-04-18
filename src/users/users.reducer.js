
import { GO_PREV, GO_NEXT, GET_USERS, ADD_USERS, UPDATE_USERS, DELETE_USERS } from './actionTypes'

const initialState = {
  users: [],
  currentPage: 0,    // watch first page by index
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GO_PREV:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };

    case GO_NEXT:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };

    case GET_USERS:
      return {
        ...state,
        users: action.payload.usersList
      };
    case ADD_USERS:
      return {
        ...state,
        users: [...state.users, action.payload.user]
      };
    case UPDATE_USERS:
      return {
        ...state,
        users: [...state.users, action.payload.user]
      };
    case DELETE_USERS:
      return {
        ...state,
        users: [...state.users, userId]
      };
    default:
      return state;
  }
};

export default usersReducer;
