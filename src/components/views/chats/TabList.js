/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Avatar, Divider } from 'react-md';

// slice(4) will omit the day
const dateFormatter = dateString => new Date(dateString).toDateString().slice(4);

const TabList = ({ chats }) => {
  return (
    <Grid className="TabList" id="tab-list">
      {chats.map(chat => (
        <Card className="TabListCard" key={chat.id}>
          <div className="TabListCard-grid-image">
            <img src={chat.imageUrl} alt={chat.imageDescription} />
          </div>
          <div className="TabListCard-grid-name">
            <p><strong>{chat.name}</strong></p>
          </div>
          <Divider inset />
          <div className="TabListCard-grid-description">
            <p>{chat.imageDescription}</p>
          </div>
          <div className="TabListCard-grid-date">
            <p>{dateFormatter(chat.createdAt)}</p>
          </div>
          <div className="TabListCard-grid-avatar">
            <Avatar src={chat.avatarUrl} className="TabListCardAvatar" />
          </div>
        </Card>
      ))}
    </Grid>
  );
};

TabList.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TabList;
