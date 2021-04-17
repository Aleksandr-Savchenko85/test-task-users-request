
//import axios from 'axios';
import { getUsersList } from './components/gateway';
export const GO_PREV = "USER/PREV";
export const GO_NEXT = "USER/NEXT";
export const GET_USERS = "GET_USERS";
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
  return getUsersList()

};

