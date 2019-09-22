import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store/index';
import PropTypes from 'prop-types';

import { Divider, Header, Icon, Table } from 'semantic-ui-react';

export class AverageCubicWeight extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return (
      <Fragment>
        <div className='ui container'>
          <Divider horizontal>
            <Header as='h4'>
              <Icon name='tag' />
              Calculation result
            </Header>
          </Divider>

          <p>
            Doggie treats are good for all times of the year. Proven to be eaten
            by 99.9% of all dogs worldwide.
          </p>

          <Divider horizontal>
            <Header as='h4'>
              <Icon name='bar chart' />
              Specifications
            </Header>
          </Divider>

          <Table definition>
            <Table.Body>
              <Table.Row>
                <Table.Cell width={2}>Size</Table.Cell>
                <Table.Cell>1" x 2"</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Weight</Table.Cell>
                <Table.Cell>6 ounces</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Color</Table.Cell>
                <Table.Cell>Yellowish</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Odor</Table.Cell>
                <Table.Cell>Not Much Usually</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  products: state.getIn(['AverageCubicWeight', 'products'])
});

export const mapDispatchToProps = dispatch => ({
  handleInitialData() {
    const action = actionCreators.getAjaxData();
    dispatch(action);
  }
});

AverageCubicWeight.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AverageCubicWeight);
