import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UsersProvider } from './usersContext'
import { UsersStore } from './store/usersStore';

const store = new UsersStore()

ReactDOM.render(
  <React.StrictMode>
    <UsersProvider store={store}>
    <App />
    </UsersProvider>    
  </React.StrictMode>,
  document.getElementById('root')
);


