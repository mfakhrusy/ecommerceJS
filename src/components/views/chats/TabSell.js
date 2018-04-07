import React from 'react';
import PropTypes from 'prop-types';
import TabList from 'components/views/chats/TabList';

const TabSell = ({ chats }) => (
  <TabList chats={chats} />
);

TabSell.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TabSell;
