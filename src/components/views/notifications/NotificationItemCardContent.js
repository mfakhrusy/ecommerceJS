import React from 'react';
import PropTypes from 'prop-types';
// import { Card } from 'react-md';
import Card from 'react-md/lib/Cards';

const NotificationItemCardContent = ({ message }) => (
  <Card className="NotificationItemCardContent">
    <p>{message}</p>
  </Card>
);

NotificationItemCardContent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NotificationItemCardContent;
