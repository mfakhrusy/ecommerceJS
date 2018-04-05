/* eslint-disable arrow-body-style */
import {
  CATEGORIES_HAS_ERRORED,
  CATEGORIES_IS_LOADING,
  CATEGORIES_FETCH_DATA_SUCCESS,
} from 'constants/actionTypes';

export const categoriesHasErrored = (bool) => {
  return {
    type: CATEGORIES_HAS_ERRORED,
    categoriesHasErrored: bool,
  };
};

export const categoriesIsLoading = (bool) => {
  return {
    type: CATEGORIES_IS_LOADING,
    categoriesIsLoading: bool,
  };
};

export const categoriesFetchDataSuccess = (categories) => {
  return {
    type: CATEGORIES_FETCH_DATA_SUCCESS,
    categories,
  };
};

export const categoriesFetchData = (url) => {
  return (dispatch) => {
    dispatch(categoriesIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(categoriesIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(categories => dispatch(categoriesFetchDataSuccess(categories)))
      .catch(() => dispatch(categoriesHasErrored(true)));
  };
};
