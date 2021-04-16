import { GO_PREV, GO_NEXT } from "./users.actions";


const initialState = {
    users: [
        {"id":819,"name":"asdas 12","surname":"dasd","desc":"asdasd","avatar":null},{"id":820,"name":"asdas 1","surname":"dasd 4","desc":"asdasd","avatar":null},{"id":821,"name":"asdas 11","surname":"dasd","desc":"asdasd","avatar":null},{"id":824,"name":"asdasd","surname":"asdasdasd","desc":"dasdasd","avatar":null},{"id":832,"name":"312312!!!!!!!!!!","surname":"444","desc":"444","avatar":null},{"id":834,"name":"asdas","surname":"12312","desc":"3123","avatar":null},{"id":836,"name":"asd","surname":"asdas","desc":"dasd","avatar":null},{"id":838,"name":"222","surname":"222","desc":"222","avatar":null},{"id":846,"name":"qweerf","surname":"sdfsdf","desc":"sd","avatar":null},{"id":847,"name":"Test","surname":"Tester","desc":"Some text","avatar":null},{"id":848,"name":"Test 2","surname":"Tester 2","desc":"Some text 2","avatar":null},{"id":849,"name":"Test 3","surname":"Tester 3","desc":"Some text 3","avatar":null},{"id":850,"name":"Test 4","surname":"Tester 4","desc":"Some text 4","avatar":null},{"id":851,"name":"Test 5","surname":"Tester 5","desc":"Some text 5","avatar":null},{"id":852,"name":"Test 6","surname":"Tester 6","desc":"Some text 6","avatar":null},{"id":853,"name":"Test 17","surname":"Tester 17","desc":"Some text 17","avatar":null},{"id":854,"name":"Test 8","surname":"Tester 8","desc":"Some text 8","avatar":null},{"id":855,"name":"Test 9","surname":"Tester 9","desc":"Some text 9","avatar":null},{"id":889,"name":"qweweq","surname":"qwewqe","desc":"qwewqe","avatar":null},{"id":891,"name":"New","surname":"New","desc":"New","avatar":null},{"id":892,"name":"The","surname":"Man","desc":"One","avatar":null},{"id":893,"name":"Last User 1","surname":"Last User 2","desc":"Last User 3","avatar":null},{"id":894,"name":"Test User","surname":"Test User","desc":"Test User","avatar":null},{"id":895,"name":"iron","surname":"man","desc":"123","avatar":null},{"id":896,"name":"spider","surname":"man","desc":"321","avatar":null}
    ],
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