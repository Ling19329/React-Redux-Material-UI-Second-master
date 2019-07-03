
import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import Pagination from './pagination';

import './styles.css';

const ListBody = ({
  page, count, rowsPerPage, handleChangePage, handleChangeRowsPerPage, columnsCount,
}) => (
  <TableFooter>
    <TableRow>
      <TableCell colSpan={columnsCount} align='center'>
        <Pagination
          count={count}
          rowsPerPage={parseInt(rowsPerPage, 10)}
          page={page}
          SelectProps={{
            native: true,
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          ActionsComponent={Pagination}
        />
      </TableCell>

    </TableRow>
  </TableFooter>
);

ListBody.propTypes = {
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  columnsCount: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
};

export default ListBody;
