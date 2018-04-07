import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CircularProgress } from 'react-md';
import urls from 'constants/urls';
import ChatContent from 'components/views/chats/ChatContent';
import BackButton from 'components/views/BackButton';
import ViewsContainer from 'containers/views/ViewsContainer';

const accessibilityProps = {
  'aria-busy': true,
  'aria-describedby': 'chats-loading-progress',
};

class Chats extends React.Component {
  componentDidMount() {
    this.props.fetchData(urls.chats.url);
  }

  render() {
    let content = null;

    if (this.props.chatsHasErrored) {
      content = <h1>Chats Display Error!</h1>;
    } else if (this.props.chatsIsLoading) {
      accessibilityProps['aria-busy'] = false;
      content = <CircularProgress id={accessibilityProps['aria-describedby']} />;
    } else {
      content = <ChatContent chats={this.props.chats} />;
    }

    return (
      <ViewsContainer
        pathname={this.props.location.pathname}
        inset
        className="Chats"
        nav={<BackButton />}
      >
        {content}
      </ViewsContainer>
    );
  }
}

Chats.propTypes = {
  fetchData: PropTypes.func.isRequired,
  chats: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.object.isRequired,
  chatsHasErrored: PropTypes.bool.isRequired,
  chatsIsLoading: PropTypes.bool.isRequired,
};

export default withRouter(Chats);
