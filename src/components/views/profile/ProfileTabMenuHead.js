import React from 'react';
import PropTypes from 'prop-types';

class ProfileTabMenuHead extends React.Component {
  render() {
    const { tabMenuItems } = this.props;
    return (
      <div className="ProfileTabMenuHead">
        {tabMenuItems.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
      </div>
    );
  }
}

ProfileTabMenuHead.propTypes = {
  tabMenuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProfileTabMenuHead;

