/* eslint-disable arrow-body-style */
import {
  SET_FILTER_PRICE,
  // SET_FILTER_SORT,
} from 'constants/actionTypes';

export const setFilterPrice = (price) => {
  return {
    type: SET_FILTER_PRICE,
    filterPrice: price,
  };
};

// export const setFilterSort = (sort) => {
//   return {
//     type: SET_FILTER_SORT,
//     filterSort: sort,
//   };
// };
