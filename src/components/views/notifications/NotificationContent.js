import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-md';
import NotificationItem from 'components/views/notifications/NotificationItem';

const NotificationContent = ({ notifications }) => (
  <Grid containers="notifications" className="NotificationContent" id="notification-content">
    {notifications.map(item => (
      <NotificationItem item={item} key={item.id} />
    ))}
  </Grid>
);


NotificationContent.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NotificationContent;
