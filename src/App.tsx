import { FC, useState } from 'react';
import { Wrapper } from './App.styles';
import Form from './components/form/Form';
import Table from './components/table/Table';
import { useStore } from './usersContext';

const App: FC = () => {
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [id, setId] = useState<any>('');
  const [editing, setEditing] = useState<boolean>(false);
  const store = useStore();

  return (
    <Wrapper>
      <Form
        name={name}
        setName={setName}
        surname={surname}
        setSurname={setSurname}
        email={email}
        setEmail={setEmail}
        id={id}
        editing={editing}
        setEditing={setEditing}
      />
      {store.users.length > 0 && (
        <Table
          setName={setName}
          setSurname={setSurname}
          setEmail={setEmail}
          setId={setId}
          setEditing={setEditing}
        />
      )}
    </Wrapper>
  );
};

export default App;
