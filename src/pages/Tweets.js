import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BtnHome, BtnBox, Btn, Box } from '../components/Button/Button.styled';
import { UsersList } from '../components/UsersList/UsersList';
import { Loader } from '../components/Loader/Loader';
import { StatusFilter } from '../components/StatusFilter/StatusFilter';
import { fetchUsers } from 'redux/operations';
import {
  selectError,
  selectIsLoading,
  selectVisibleUsers,
} from 'redux/selectors';

export default function Tweets() {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const users = useSelector(selectVisibleUsers);
  const perPage = 3;

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [visibleData, setVisibleData] = useState([]);
  useEffect(() => {
    const savedData = localStorage.getItem('persist:users');

    if (!savedData) {
      dispatch(fetchUsers());
    }
  }, [dispatch]);

  useEffect(() => {
    setTotalPages(Math.ceil(users.length / perPage));

    setVisibleData([...users.slice(0, perPage * page)]);
  }, [users, page]);

  const selectUsers = page => {
    let selectedUsers = [];

    for (
      let i = (page - 1) * perPage;
      i < page * perPage && i < users.length;
      i++
    ) {
      selectedUsers.push(users[i]);
    }

    return selectedUsers;
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setVisibleData(prevData => [...prevData, ...selectUsers(nextPage)]);
  };

  const handleFilterClick = () => {
    setPage(1);
  };

  return (
    <>
      <BtnBox>
        <BtnHome to={backLinkHref}>&#10229; Back Home</BtnHome>
        <StatusFilter onClick={handleFilterClick} />
      </BtnBox>
      {isLoading && !error && <Loader />}
      <UsersList users={visibleData} />
      {page < totalPages && users.length > 0 && (
        <Box>
          <Btn onClick={handleLoadMore}>Load more</Btn>
        </Box>
      )}
      {error && <p>Something went wrong... </p>}
    </>
  );
}
