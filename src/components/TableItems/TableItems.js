import React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'semantic-ui-react';

const TableItems = ({ categorisedProducts }) => {
  return (
    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={3}>Category</Table.Cell>
          <Table.Cell>{categorisedProducts.category}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Title</Table.Cell>
          <Table.Cell>{categorisedProducts.title}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Weight</Table.Cell>
          <Table.Cell>{categorisedProducts.weight}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Size</Table.Cell>
          <Table.Cell>
            {categorisedProducts.size.width}(width) x{' '}
            {categorisedProducts.size.length}(length) x{' '}
            {categorisedProducts.size.height}(height)
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

TableItems.propTypes = {
  categorisedProducts: PropTypes.object
};

export default TableItems;
