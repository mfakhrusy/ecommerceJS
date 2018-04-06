import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ViewsContainer from 'containers/views/ViewsContainer';

class Help extends React.Component {
  render() {
    return (
      <ViewsContainer pathname={this.props.location.pathname}>
        <p>Help</p>
      </ViewsContainer>
    );
  }
}

Help.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Help);
