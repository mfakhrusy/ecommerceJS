import React, { Component } from 'react';
import { TabsContainer, Tabs, Tab } from 'react-md';
import TabAll from 'components/views/chats/TabAll';
import TabBlock from 'components/views/chats/TabBlock';
import TabBuy from 'components/views/chats/TabBuy';
import TabSell from 'components/views/chats/TabSell';
import PropTypes from 'prop-types';

class ChatContent extends Component {
  render() {
    // filter each type
    const chatsAll = this.props.chats.filter(item => item.type !== 'block');
    // buy means user want to buy
    const chatsBuy = this.props.chats.filter(item => item.type === 'buy');
    // sell means user sell items
    const chatsSell = this.props.chats.filter(item => item.type === 'sell');
    // block means blocked user (from either buy/sell)
    const chatsBlock = this.props.chats.filter(item => item.type === 'block');

    return (
      <TabsContainer
        themed
      >
        <Tabs
          inactiveTabClassName="md-text--secondary"
          mobile
          tabId="chat-tab-menu"
          className="ChatContentTabs"
          id="chat-content-tabs"
        >
          <Tab label="all">
            <TabAll chats={chatsAll} />
          </Tab>
          <Tab label="buy">
            <TabBuy chats={chatsBuy} />
          </Tab>
          <Tab label="sell">
            <TabSell chats={chatsSell} />
          </Tab>
          <Tab label="block">
            <TabBlock chats={chatsBlock} />
          </Tab>
        </Tabs>
      </TabsContainer>
    );
  }
}

ChatContent.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ChatContent;
