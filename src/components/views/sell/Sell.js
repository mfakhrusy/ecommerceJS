/* eslint-disable react/no-unused-state */
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { Card } from 'react-md/lib/Cards';
import DisplayImage from 'components/views/sell/DisplayImage';
import ViewsContainer from 'containers/views/ViewsContainer';
import BackButton from 'components/views/BackButton';

class Sell extends React.Component {
  constructor() {
    super();

    this.handleFiles = this.handleFiles.bind(this);
    // this.handleLoad = this.handleLoad.bind(this);
    this.state = {
      file: {},
      // image: {},
    };
  }

  handleFiles(event) {
    this.setState({ file: event.target.files[0] });
    // const xhr = new XMLHttpRequest();
    // const reader = new FileReader();
    // console.log(reader);
    // xhr.onreadystatechange = () => {

    // }
    // reader.readAsDataURL(event.target.files[0]);
    // this.setState({ image: reader.result });
  }

  // handleLoad(event) {
  //   console.log('TESSSS');
  //   const reader = new FileReader();
  //   reader.readAsDataURL(event.target.files[0]);
  //   this.setState({ image: reader.result });
  // }

  render() {
    // console.log(this.state);
    return (
      <ViewsContainer
        pathname={this.props.location.pathname}
        inset
        className="Sell"
        nav={<BackButton />}
      >
        <React.Fragment>
          <input
            type="file"
            accept="image/*;capture=camera"
            onChange={(event) => { this.handleFiles(event); }}
            // onLoad={(event) => { this.handleLoad(event); }}
          />
          <DisplayImage file={this.state.file} />
        </React.Fragment>
      </ViewsContainer>
    );
  }
}

Sell.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Sell);
