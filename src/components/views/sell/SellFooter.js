import React from 'react';
// import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { Button } from 'react-md';
import Button from 'react-md/lib/Buttons';

class SellFooter extends React.Component {
  // constructor() {
  //   super();

  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick(category, price) {
  //   this.props.setFilterCategories(category);
  //   this.props.setFilterPrice(price);
  //   this.props.history.push('/');
  // }

  render() {
    return (
      <div className="SellFooter">
        <Button
          flat
        >
          Reset
        </Button>
        <Button
          flat
          primary
          swapTheming
          // onClick={() => {
          //   this.handleClick(this.props.filter.category, this.props.filter.price);
          // }}
        >
          Submit
        </Button>
      </div>
    );
  }
}

// SellFooter.propTypes = {
//   filter: PropTypes.object.isRequired,
//   setFilterCategories: PropTypes.func.isRequired,
//   setFilterPrice: PropTypes.func.isRequired,
//   history: PropTypes.object.isRequired,
// };

// export default withRouter(SellFooter);
export default SellFooter;
