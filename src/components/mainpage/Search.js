import React from 'react';
import { Autocomplete } from 'react-md';

const Search = () => (
  <React.Fragment>
    <Autocomplete
      id="navigation-bar-search"
      data={['test', 'test2']}
    />
  </React.Fragment>
);

export default Search;
