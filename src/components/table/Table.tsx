import { FC, useState, MouseEvent } from 'react';
import {
  TableSection,
  TableDiv,
  TableHeader,
  TableBody,
  TableTitle,
} from './Table.styles';
import { useStore } from '../../usersContext';
import { observer } from 'mobx-react-lite';


interface TableProps {
  setName: (name: string) => void;
  setSurname: (surname: string) => void;
  setEmail: (email: string) => void;
  setId: (id?: string) => void;
  setEditing: (editing: boolean) => void;
}


const Table: FC<TableProps> = observer(
  ({ setName, setSurname, setEmail, setId, setEditing }) => {
    const [counter, setCounter] = useState<number>(0);

    const store = useStore();

    const getUser = (id: any) => {
      const userObj = store.findUser(id);

      if (userObj) {
        const { name, surname, email, id } = userObj;
        setName(name);
        setSurname(surname);
        setEmail(email);
        setId(id);
        setEditing(true);
      }
    };

    const getFieldInfo = (e: MouseEvent) => {
      const field = e.currentTarget.textContent!;

      setCounter((currCount) => currCount + 1);

      store.sortUsers(field, counter);
    };

    const tableHeaders = ['Name', 'Surname', 'Email'];

    return (      
      <TableSection>
        <TableHeader>
          {tableHeaders.map((element, index) => (
            <TableTitle key={index} onClick={(e) => getFieldInfo(e)}>
              {element}
            </TableTitle>
          ))}
        </TableHeader>
        
        {store.users.map(({ name, surname, email, id }) => (
          <TableBody key={id} onClick={() => getUser(id)}>
            <TableDiv>{name}</TableDiv>
            <TableDiv>{surname}</TableDiv>
            <TableDiv>{email}</TableDiv>
          </TableBody>
        ))}
      </TableSection>
    );
  },
);

export default Table;
