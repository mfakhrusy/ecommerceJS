/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-md';

const NotificationItemCardHeader = ({ item }) => {
  return (
    <Card className="NotificationItemCardHeader">
      <p>{new Date(item.createdAt).toDateString()}</p>
      <h4>{item.title}</h4>
    </Card>
  );
};

NotificationItemCardHeader.propTypes = {
  item: PropTypes.object.isRequired,
};

export default NotificationItemCardHeader;
