import { UserItem } from '..//UserItem/UserItem';
import { List } from './UsersList.styled';

export const UsersList = ({ users }) => {
  return (
    <List>
      {users.map(user => (
        <li key={user.id}>
          <UserItem user={user} />
        </li>
      ))}
    </List>
  );
};
