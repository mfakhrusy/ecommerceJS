import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-md/lib/Cards';

const image = require('assets/images/placeholder_400_400.png');

class DisplayImage extends React.Component {
  constructor() {
    super();

    this.state = {
      imageSrc: image,
    };
    this.displayImage = this.displayImage.bind(this);
  }

  displayImage() {
    // to display image, we need the FileReader API
    const reader = new FileReader();
    // because this.props.file default is common object,
    // we need to check whether the file has been picked or not.
    // if the file has been picked/chosen, the type is changed into Blob.
    // we're using that for checking
    if (this.props.file instanceof Blob) {
      // need to read the file as a data URL (url representing of data)
      reader.readAsDataURL(this.props.file);
      // the readAsDataURL is an async method
      // which will load if readystatechange is 2 on FileReader
      // or after it's succesfully loader, we'll use onload event handler to catch that
      reader.onload = (event) => {
        // set the state of src.
        // result contain a string for displaying the image
        // on the img's src attribute
        this.setState({ imageSrc: event.target.result });
      };
    }
  }

  render() {
    // const content = this.state.image.length === 0 ? '' : this.state.image;
    this.displayImage();
    return (
      <Card>
        {/* {this.state.imageSrc === '' ? '' : <img src={this.state.imageSrc} alt="tes" />} */}
        <img src={this.state.imageSrc} alt="tes" />
      </Card>
    );
  }
}

DisplayImage.propTypes = {
  file: PropTypes.object.isRequired,
};

export default DisplayImage;
