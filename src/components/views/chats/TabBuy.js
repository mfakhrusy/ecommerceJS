import React from 'react';
import PropTypes from 'prop-types';
import TabList from 'components/views/chats/TabList';

const TabBuy = ({ chats }) => (
  <TabList chats={chats} />
);

TabBuy.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TabBuy;
