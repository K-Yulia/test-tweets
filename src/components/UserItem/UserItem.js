import { Btn, Text, Container, ImgBox } from './UserItem.styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleIsFollowed } from 'redux/usersSlice';

export const UserItem = ({ user }) => {
  const { avatar, tweets, followers, isFollowed } = user;
  const dispatch = useDispatch();
  const handleIsFollowed = () => dispatch(toggleIsFollowed(user.id));

  return (
    <Container>
      <ImgBox>
        <img src={avatar} alt="User avatar" />
      </ImgBox>
      <Text>
        <p>{tweets} Tweets</p>
        <p>{followers.toLocaleString()} Followers</p>
      </Text>
      <Btn
        type="button"
        className={isFollowed && 'isFollowed'}
        onClick={handleIsFollowed}
      >
        {isFollowed ? 'Following' : 'Follow'}
      </Btn>
    </Container>
  );
};
