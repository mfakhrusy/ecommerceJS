import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SVGButtonMD extends React.Component {
  render() {
    const {
      className,
      onClick,
      children,
      id,
    } = this.props;
    const buttonClassNames = classNames(
      ...className.split(' '),
      {
        SVGButtonMD: true,
      },
    );
    return (
      <button
        className={buttonClassNames}
        id={id}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

SVGButtonMD.defaultProps = {
  className: '',
  id: '',
  onClick: () => {},
};

SVGButtonMD.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default SVGButtonMD;
