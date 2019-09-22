import { fromJS } from 'immutable';
import { constants } from './index';

const defaultState = fromJS({
  products: [],
  categorisedProducts: [],
  cubicWeight: ''
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_INITIAL_PRODUCTS_DATA:
      return state
        .set('products', action.data)
        .set('categorisedProducts', action.filteredData)
        .set('cubicWeight', action.averageCubicWeight);
    default:
      return state;
  }
};
