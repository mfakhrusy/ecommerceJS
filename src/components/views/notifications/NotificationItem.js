/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
// import { Card, Cell } from 'react-md';
import Card from 'react-md/lib/Cards';
import Cell from 'react-md/lib/Grids/Cell';
import NotificationItemCardHeader from 'components/views/notifications/NotificationItemCardHeader';
import NotificationItemCardContent from 'components/views/notifications/NotificationItemCardContent';

const NotificationItem = ({ item }) => {
  return (
    <Cell key={item.id} className="NotificationItem" id={`notification-item-${item.id}`}>
      <Card className="NotificationItemCard" id={`notification-item-card-${item.id}`}>
        <NotificationItemCardHeader item={item} />
        <NotificationItemCardContent message={item.message} />
        {item.tags.map(tag => <span>{tag}</span>)}
      </Card>
    </Cell>
  );
};

NotificationItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default NotificationItem;
