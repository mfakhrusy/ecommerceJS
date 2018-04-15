import React from 'react';
import PropTypes from 'prop-types';
import ModalCloseButtonContainer from 'containers/views/home/ModalCloseButtonContainer';
import ModalBackButton from 'components/views/home/ModalBackButton';
import apiKey from 'constants/apiKey';

class HomeModalContentDescription extends React.Component {
  render() {
    // todo change the API call into more responsive and friendly
    // perhaps use redux action + async call for that
    return (
      <div className="HomeModalContent HomeModalContentDescription">
        <ModalCloseButtonContainer />
        <ModalBackButton
          showDescription={this.props.showDescription}
          showShare={this.props.showShare}
          descriptionIsOpen={this.props.descriptionIsOpen}
          shareIsOpen={this.props.shareIsOpen}
        />
        <div className="ModalLocation">
          <iframe
            title="Map"
            src={`//www.google.com/maps/embed/v1/place?q=${this.props.homeItem.location}&zoom=15&key=${apiKey.googleMapApi.key}`}
          />
          <div>
            <p>{this.props.homeItem.location}</p>
          </div>
        </div>
      </div>
    );
  }
}

HomeModalContentDescription.propTypes = {
  homeItem: PropTypes.object.isRequired,
  showDescription: PropTypes.func.isRequired,
  showShare: PropTypes.func.isRequired,
  descriptionIsOpen: PropTypes.bool.isRequired,
  shareIsOpen: PropTypes.bool.isRequired,
};

export default HomeModalContentDescription;
