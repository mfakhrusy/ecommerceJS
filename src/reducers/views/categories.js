import {
  CATEGORIES_HAS_ERRORED,
  CATEGORIES_IS_LOADING,
  CATEGORIES_FETCH_DATA_SUCCESS,
  SET_FILTER_CATEGORIES,
} from 'constants/actionTypes';

export const categoriesHasErrored = (state = false, action) => {
  switch (action.type) {
    case CATEGORIES_HAS_ERRORED:
      return action.categoriesHasErrored;
    default:
      return state;
  }
};

export const categoriesIsLoading = (state = false, action) => {
  switch (action.type) {
    case CATEGORIES_IS_LOADING:
      return action.categoriesIsLoading;
    default:
      return state;
  }
};

export const categories = (state = [], action) => {
  switch (action.type) {
    case CATEGORIES_FETCH_DATA_SUCCESS:
      return action.categories;
    default:
      return state;
  }
};

export const filterCategory = (state = '', action) => {
  switch (action.type) {
    case SET_FILTER_CATEGORIES:
      return action.filterCategory;
    default:
      return state;
  }
};
