import React, { useState } from 'react';
import { Provider } from 'react-redux';
import UsersList from './users/components/UsersList';
import SearchForm from './users/components/SearchForm';
import FormUpdate from './users/components/FormUpdate';
import store from './store';



const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  const showForm = () => {
    setIsOpen(true)

  };
  const hideForm = () => {
    setIsOpen(false)
  };


  return (

    <Provider store={store}>
      <SearchForm />
      <UsersList showForm={showForm} />
      <FormUpdate
        isOpen={isOpen}
        showForm={showForm}
        hideForm={hideForm}

      />
    </Provider>

  )
}

export default App;