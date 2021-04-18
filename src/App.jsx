import { Provider } from 'react-redux';
import UsersList from './users/components/UsersList';
import UserForm from './users/components/UserForm';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <UserForm />
      <UsersList />
    </Provider>
  )
}

export default App;
