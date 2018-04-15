import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'react-md/lib/TextFields/TextField';

class Search extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text) {
    this.props.setHomeSearch(text);
  }

  render() {
    return (
      <TextField
        id="navigation-bar-search"
        data={['test', 'test2']}
        placeholder="Search"
        onChange={(text) => { this.handleChange(text); }}
        // value={this.props.homeSearchText}
      />
    );
  }
}

Search.propTypes = {
  setHomeSearch: PropTypes.func.isRequired,
  // homeSearchText: PropTypes.string.isRequired,
};

export default Search;
