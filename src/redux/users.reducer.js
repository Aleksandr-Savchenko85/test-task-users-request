import {
  GO_PREV,
  GO_NEXT,
  GET_USERS,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
} from './actionTypes'

const initialState = {
  users: [],
  currentPage: 0,    // watch first page by index
  currentUser: null,
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
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: state.users.find(user => user.id === action.payload.userId),
      };
    case CLEAR_CURRENT_USER:
      return {
        ...state,
        currentUser: null,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload.usersList
      };
    case ADD_USER:
      return {
        ...state,
        users: action.payload.users
      };
    case UPDATE_USER: {
      const index = state.users.findIndex(user => user.id === action.payload.user.id);
      const copyUsers = [...state.users];

      copyUsers[index].name = action.payload.user.name;
      copyUsers[index].surname = action.payload.user.surname;
      copyUsers[index].desc = action.payload.user.desc;

      return {
        ...state,
        users: [...state.users]

      };
    }
    case DELETE_USER:
      return {
        ...state,
        users: copyUsers
      };
    default:
      return state;
  }
};

export default usersReducer;
