import { GO_PREV, GO_NEXT, GET_USERS } from "./users.actions";
//import {getUsersList} from './components/gateway';
import axios from 'axios';

const baseURL = "http://77.120.241.80:8811/api/users";






 const initialState = {

  users: [{}],
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
    default:
      return state;
  }
};

export default usersReducer;