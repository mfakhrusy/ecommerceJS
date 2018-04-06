import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ViewsContainer from 'containers/views/ViewsContainer';
import BackButton from 'components/views/BackButton';

class Chat extends React.Component {
  render() {
    return (
      <ViewsContainer
        pathname={this.props.location.pathname}
        fixed
        className="Chat"
        nav={<BackButton />}
      >
        <p>Chat</p>
      </ViewsContainer>
    );
  }
}

Chat.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Chat);
