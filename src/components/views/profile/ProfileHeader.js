import React from 'react';
import { Card } from 'react-md';
import ProfileHeaderAvatar from 'components/views/profile/ProfileHeaderAvatar';

class ProfileHeader extends React.Component {
  render() {
    return (
      <Card className="ProfileHeader" id="profile-header">
        <ProfileHeaderAvatar />
      </Card>
    );
  }
}

export default ProfileHeader;
