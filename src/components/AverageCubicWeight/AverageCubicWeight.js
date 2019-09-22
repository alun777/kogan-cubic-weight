import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store/index';
import PropTypes from 'prop-types';
import { Divider, Header, Icon } from 'semantic-ui-react';

import TableItems from '../TableItems/TableItems';

export class AverageCubicWeight extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    const { categorisedProducts, cubicWeight } = this.props;
    return (
      <div className='ui container'>
        <Divider horizontal>
          <Header as='h4'>
            <Icon name='tag' />
            Calculation result
          </Header>
        </Divider>

        <p>
          {cubicWeight &&
            `The average cubic weight for all products in the "Air Conditioners"
              category equals ${cubicWeight}kg.`}
        </p>

        <Divider horizontal>
          <Header as='h4'>
            <Icon name='bar chart' />
            List of products
          </Header>
        </Divider>

        {categorisedProducts.map((item, index) => {
          return (
            <TableItems categorisedProducts={item} key={index}></TableItems>
          );
        })}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  categorisedProducts: state.getIn([
    'AverageCubicWeight',
    'categorisedProducts'
  ]),
  cubicWeight: state.getIn(['AverageCubicWeight', 'cubicWeight'])
});

export const mapDispatchToProps = dispatch => ({
  handleInitialData() {
    const action = actionCreators.getAjaxData();
    dispatch(action);
  }
});

AverageCubicWeight.propTypes = {
  categorisedProducts: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  cubicWeight: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AverageCubicWeight);
