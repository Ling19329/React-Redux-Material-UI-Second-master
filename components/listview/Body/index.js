
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { stableSort, getSorting } from 'utils/helpers';
import './styles.css';

const getTableCellValue = (column, rowValues, primaryKey, viewName) => {
  let val = ' ';
  if (column.field) {
    if (column.field.search('_fk') !== -1) {
      val = rowValues[`${column.field}_name`];
    } else {
      val = rowValues[column.field];
    }
  }
  if (typeof val === 'boolean') {
    return (
      <Icon classes={{ root: `ListView__Body__icon__${val ? 'success' : 'faild'}` }}>
        {val ? 'check_circle' : 'remove_circle'}
      </Icon>
    );
  }
  if (column.type === 'date') {
    val = val ? moment(val).format('MMM. DD, YYYY, HH:mm A.') : '';
  }

  if (column.field === 'name' && !column.no_link) {
    return (
      <Button
        classes={{ root: 'ListView__Body__Cell__LinkButton' }}
        to={`/${viewName}_detail/${rowValues[primaryKey]}`}
        aria-haspopup='true'
        component={Link}
        variant='text'
        color='primary'
        fullWidth
      >
        {val || ''}
      </Button>
    );
  }

  if (column.has_link) {
    return (
      <Button
        classes={{ root: 'ListView__Body__Cell__LinkButton' }}
        to={`/${column.to ? `${column.to}_detail` : `${viewName}_detail`}/${rowValues[column.link_id_field ? column.link_id_field : primaryKey]}`}
        aria-haspopup='true'
        component={Link}
        variant='text'
        color='primary'
        fullWidth
      >
        {val || ''}
      </Button>
    );
  }
  return val || ' ';
};

export default class ListBody extends React.Component {
  isSelected = (id) => {
    const { selected } = this.props;
    return selected.indexOf(id) !== -1;
  }

  render() {
    const {
      order,
      orderBy,
      data,
      columns,
      page,
      rowsPerPage,
      onClickRow,
      showEmptyRow,
      primaryKey,
      columnsCount,
      viewName,
    } = this.props;
    let emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
    emptyRows = emptyRows > 10 ? 10 : emptyRows;

    return (
      <TableBody>
        {stableSort(data, getSorting(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((n, i) => {
            const isSelected = this.isSelected(n[primaryKey]);
            return (
              <TableRow
                hover
                onClick={event => onClickRow(event, n[primaryKey])}
                role='checkbox'
                aria-checked={isSelected}
                tabIndex={-1}
                key={i}
                selected={isSelected}
              >
                <TableCell padding='checkbox' classes={{ root: 'ListView__Body__Cell First_Column' }}>
                  <Checkbox classes={{ root: 'ListView__Body__Cell__CheckBox' }} checked={isSelected} />
                </TableCell>
                {
                  columns.map((column, ii) => {
                    if (column.label) {
                      return (
                        <TableCell classes={{ root: 'ListView__Body__Cell' }} component='th' scope='row' padding='none' align='center' key={ii}>
                          {getTableCellValue(column, n, primaryKey, viewName)}
                        </TableCell>
                      );
                    }
                    return null;
                  })
                }
              </TableRow>
            );
          })}
        {showEmptyRow && emptyRows > 0 && (
          <TableRow style={{ height: 48 * emptyRows }}>
            <TableCell className='ListView__Body__Empty_Cell' colSpan={columnsCount}>
              {!data.length && 'There are no results for your search.'}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    );
  }
}

ListBody.propTypes = {
  data: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  order: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  selected: PropTypes.array.isRequired,
  orderBy: PropTypes.string.isRequired,
  onClickRow: PropTypes.func.isRequired,
  viewName: PropTypes.string.isRequired,
  showEmptyRow: PropTypes.bool.isRequired,
  primaryKey: PropTypes.string.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  columnsCount: PropTypes.number.isRequired,
};
