import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// const SVGButtonMD = ({ children, className, onClick }) => (
class SVGButtonMD extends React.Component {
  render() {
    const { className, onClick, children } = this.props;
    const buttonClassNames = classNames(
      ...className.split(' '),
      {
        SVGButtonMD: true,
      },
    );
    return (
      <button
        className={buttonClassNames}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

SVGButtonMD.defaultProps = {
  className: 'SVGButtonMD',
  onClick: () => {},
};

SVGButtonMD.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
};

export default SVGButtonMD;
