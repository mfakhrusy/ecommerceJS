import React from 'react';
import ProfileTabMenuHead from 'components/views/profile/ProfileTabMenuHead';
import TabSelling from 'components/views/profile/TabSelling';
import TabSold from 'components/views/profile/TabSold';
import TabFavorite from 'components/views/profile/TabFavorite';

class ProfileTabMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      tabMenuItems: ['SELLING', 'SOLD', 'FAVORITES'],
      tabActive: 'SELLING',
    };
  }

  render() {
    const { tabMenuItems, tabActive } = this.state;

    let content = null;

    if (tabActive === 'SOLD') {
      content = <TabSold />;
    } else if (tabActive === 'FAVORITES') {
      content = <TabFavorite />;
    } else {
      content = <TabSelling />;
    }
    return (
      // <TabsContainer
      //   themed
      //   className="ProfileTabMenu"
      // >
      //   <Tabs
      //     inactiveTabClassName="md-text--secondary"
      //     mobile
      //     tabId="profile-tab-menu"
      //   >
      //     <Tab label={tabMenuItems[0]}>
      //       <TabSelling />
      //     </Tab>
      //     <Tab label={tabMenuItems[1]}>
      //       <h2>{tabMenuItems[1]}</h2>
      //     </Tab>
      //     <Tab label={tabMenuItems[2]}>
      //       <TabFavoriteContainer />
      //     </Tab>
      //   </Tabs>
      // </TabsContainer>
      <div className="ProfileTabMenu">
        <ProfileTabMenuHead tabMenuItems={tabMenuItems} />
        <div className="ProfileTabMenuContent">
          {content}
        </div>
      </div>
    );
  }
}

export default ProfileTabMenu;
