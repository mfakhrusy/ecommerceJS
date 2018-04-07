import React, { Component } from 'react';
import { TabsContainer, Tabs, Tab } from 'react-md';

const tabMenuItems = ['SELLING', 'SOLD', 'FAVORITES'];

class ProfileTabMenu extends Component {
  render() {
    return (
      <TabsContainer
        themed
      >
        <Tabs
          inactiveTabClassName="md-text--secondary"
          mobile
          tabId="profile-tab-menu"
        >
          <Tab label={tabMenuItems[0]}>
            <h2>{tabMenuItems[0]}</h2>
          </Tab>
          <Tab label={tabMenuItems[1]}>
            <h2>{tabMenuItems[1]}</h2>
          </Tab>
          <Tab label={tabMenuItems[2]}>
            <h2>{tabMenuItems[2]}</h2>
          </Tab>
        </Tabs>
      </TabsContainer>
    );
  }
}

export default ProfileTabMenu;
