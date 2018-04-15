import React from 'react';
import PropTypes from 'prop-types';
import TabList from 'components/views/chats/TabList';

const TabAll = ({ chats }) => (
  <TabList chats={chats} />
);

TabAll.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TabAll;
