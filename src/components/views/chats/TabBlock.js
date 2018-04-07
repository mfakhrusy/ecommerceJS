import React from 'react';
import PropTypes from 'prop-types';
import TabList from 'components/views/chats/TabList';

const TabBlock = ({ chats }) => (
  <TabList chats={chats} />
);

TabBlock.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TabBlock;
