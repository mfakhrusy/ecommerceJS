import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ViewsContainer from 'containers/views/ViewsContainer';

class Chat extends React.Component {
  render() {
    return (
      <ViewsContainer pathname={this.props.location.pathname}>
        <p>Chat</p>
      </ViewsContainer>
    );
  }
}

Chat.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Chat);
