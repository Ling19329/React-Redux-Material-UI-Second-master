
import React from 'react';
import PropTypes from 'prop-types';
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { primary } from 'constants/colors';

import { styles } from './styles';
import './styles.css';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: primary,
    color: theme.palette.common.white,
    fontSize: 14,
    padding: '0px 5px',
  },
}))(TableCell);

class ListHead extends React.Component {
  createSortHandler = property => (event) => {
    const { onRequestSort } = this.props;
    onRequestSort(event, property);
  };

  render() {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
      headers,
    } = this.props;

    return (
      <TableHead>
        <TableRow classes={{ root: 'header__row' }}>
          <CustomTableCell padding='checkbox'>
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
              classes={{
                root: 'header__checkbox',
              }}
            />
          </CustomTableCell>
          {headers.map((row, index) => {
            if (row.label) {
              return (
                <CustomTableCell
                  key={index}
                  align='center'
                  sortDirection={orderBy === row.field ? order : false}
                >
                  <Tooltip
                    title='Sort'
                    placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                    enterDelay={300}
                  >
                    <TableSortLabel
                      active={orderBy === row.field}
                      direction={order}
                      onClick={this.createSortHandler(row.field)}
                    >
                      {row.label}
                    </TableSortLabel>
                  </Tooltip>
                </CustomTableCell>
              );
            }
            return null;
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

ListHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  headers: PropTypes.array.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default withStyles(styles)(ListHead);
