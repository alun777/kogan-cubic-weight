import { constants } from './index';
import axios from 'axios';

export const getAjaxData = () => {
  return async dispatch => {
    try {
      const res = await axios.get(
        'http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com/api/products/1'
      );
      const data = res.data.objects;

      const filteredData = getProductsByCategory(data);

      const averageCubicWeight = getAverageCubicWeight(filteredData);

      dispatch({
        type: constants.GET_INITIAL_PRODUCTS_DATA,
        data,
        filteredData,
        averageCubicWeight
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const getProductsByCategory = (data, category = 'Air Conditioners') => {
  const filterResult = data.filter(item => {
    return item['category'] === category;
  });
  return filterResult;
};

const getAverageCubicWeight = filteredData => {
  let result = 0;
  for (let i = 0; i < filteredData.length; i++) {
    const size = filteredData[i].size;
    result +=
      (size.width / 100) * (size.length / 100) * (size.height / 100) * 250;
  }
  result = result / filteredData.length;
  return result;
};
