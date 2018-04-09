/* eslint-disable no-unused-vars, react/jsx-indent, arrow-parens, arrow-body-style, dot-notation */
import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import { Card, DialogContainer } from 'react-md';

class HomeContent extends React.Component {
  constructor(props) {
    super(props);
    // this.show = this.show.bind(this);
    // this.hide = this.hide.bind(this);

    this.state = {};
    // this.setState({ 'a b c': true });
  }

  // initialize state in componentDidUpdate
  // because the homeItems is async
  // so we need to keep in mind to update the state
  // whenever the homeItems is finished downloaded
  // we cannot put in componentDidMount
  // since it only invoked once (when intial render)
  // also cnanot on constructor
  // componentDidUpdate() {
  // for (const homeItem of this.props.homeItems) {
  //   this.state[`${homeItem.id}`] = false;
  // }
  // console.log(this.state[1]);
  // for (const obj of this.state) {
  //   typeof obj;
  // }
  // this.setState({ 'a b c': true });
  // }

  // static getDerivedStateFromProps(n)

  show(id) {
    this.setState({ [`dialog-visible-${id}`]: true });
  }

  hide(id) {
    this.setState({ [`dialog-visible-${id}`]: false });
  }

  render() {
    return (
      <Masonry
        className="HomeContent"
      >
        {this.props.homeItems.map((homeItem) => {
          console.log(this.state['a b c']);
          return (
          <div
            key={homeItem.id}
            className="HomeContentItem"
          >
            <Card
              // className="HomeContentItem"
              key={homeItem.id}
              // onClick={this.show(homeItem.id)}
            >
              <img src={homeItem.imageUrl} alt={`home-item-${homeItem.id}`} />
            </Card>
            <DialogContainer
              visible={this.state[homeItem.id]}
              id={`home-dialog-${homeItem.id}`}
              // onHide={this.hide(homeItem.id)}
            >
              <div>
                yey
              </div>
            </DialogContainer>
          </div>
          );
        })}
      </Masonry>
    );
  }
}
HomeContent.propTypes = {
  homeItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HomeContent;
