import { FC, FormEvent } from 'react';
import { observer } from 'mobx-react-lite';
import {
  FormSection,
  FormInput,
  FormButton,
  DeleteButton,
} from './Form.styles';
import { useStore } from '../../usersContext';

interface FormProps {
  name: string;
  setName: (name: string) => void;
  surname: string;
  setSurname: (surname: string) => void;
  email: string;
  setEmail: (email: string) => void;
  id: string;
  editing: boolean;
  setEditing: (editing: boolean) => void;
}

const Form: FC<FormProps> = observer(
  ({
    name,
    setName,
    surname,
    setSurname,
    email,
    setEmail,
    id,
    editing,
    setEditing,
  }) => {
    const store = useStore();

    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();

      if (editing) {
        store.editUser({ name, surname, email, id }, id);
        setEditing(false);
        setName('');
        setSurname('');
        setEmail('');
      } else {
        store.addUser({ name, surname, email, id });
        setName('');
        setSurname('');
        setEmail('');
      }
    };

    return (
      <FormSection onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="surname">Surname</label>
        <FormInput
          type="text"
          name="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="btns">
          <FormButton
            type="submit"
            edit={editing}
            disabled={!name || !surname ? true : false}
          >
            {editing ? 'Edit' : 'Save'}
          </FormButton>
          <DeleteButton onClick={() => store.deleteUser(id)}>
            Delete
          </DeleteButton>
        </div>
      </FormSection>
    );
  },
);

export default Form;
