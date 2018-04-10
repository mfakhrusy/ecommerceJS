import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Modal extends React.Component {
  render() {
    const modalClassNames = classNames({
      Modal: true,
      [this.props.className]: true,
    });

    return (
      <div className={modalClassNames}>
        {this.props.children}
      </div>
    );
  }
}

Modal.defaultProps = {
  className: '',
};

Modal.propTypes = {
  // arrayOf element -> when children is more than 1
  children: PropTypes.oneOfType(
    [PropTypes.arrayOf(PropTypes.element), PropTypes.element],
  ).isRequired,
  className: PropTypes.string,
};

export default Modal;
