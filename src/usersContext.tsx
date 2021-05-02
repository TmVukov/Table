import { FC } from 'react';
import { createContext, useContext } from 'react';
import { UsersStore } from './store/usersStore';

interface UsersProviderProps {
  store: UsersStore;
}

const UsersContext = createContext<UsersStore>(new UsersStore());

const UsersProvider: FC<UsersProviderProps> = ({ store, children }) => {
  return (
    <UsersContext.Provider value={store}>{children}</UsersContext.Provider>
  );
};

const useStore = () => {
  return useContext(UsersContext);
};

export { UsersProvider, useStore };
