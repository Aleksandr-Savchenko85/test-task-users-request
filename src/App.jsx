import React from 'react';
import { Provider } from 'react-redux';
import UsersList from './users/components/UsersList';
import SearchForm from './users/components/SearchForm';
import store from './store';
import Table from './users/components/Table'



const App = () => {
  return (

    <Provider store={store}>
      <SearchForm/>
      <UsersList />
    </Provider>

  )
}

export default App;