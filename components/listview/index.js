import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';

import ListToolbar from './ToolBar';
import ListHead from './Head';
import ListBody from './Body';
import ListFooter from './Footer';
import FilterList from './FilterList';
import ColumnList from './ColumnList';

import { styles } from './styles';
import './styles.css';

class ListView extends React.Component {
  state = {
    order: 'asc',
    orderBy: 'calories',
    selected: [],
    headers: [],
    data: [],
    page: 0,
    rowsPerPage: 10,
    showEmptyRow: true,
    filteredData: [],
    isfiltered: false,
    filters: [],
    openOptions: false,
    wichOpen: '',
  };

  componentWillMount() {
    const { headers, items, primaryKey } = this.props;
    this.setState({
      data: items,
      headers,
      primaryKey,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { headers, items, primaryKey } = nextProps;
    this.setState({
      data: items,
      headers,
      primaryKey,
    });
  }

  handleRequestSort = (event, property) => {
    const { orderBy, order } = this.state;
    const reOrderBy = property;
    let reOrder = 'desc';
    if (orderBy === property && order === 'desc') {
      reOrder = 'asc';
    }

    this.setState({ order: reOrder, orderBy: reOrderBy });
  };

  handleSelectAllClick = (event) => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n[state.primaryKey]) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  handleChangeSearch = (searhTerm) => {
    const { data } = this.state;
    const filteredData = data.filter(d => d.name.toLowerCase().search(searhTerm.toLowerCase()) !== -1);
    this.setState({
      filteredData,
      isfiltered: true,
    });
  }

  handleRestSearch = () => {
    this.setState({
      isfiltered: false,
      filteredData: [],
    });
  }

  handleOpenOptions = (open, wh) => () => {
    const { openOptions, wichOpen } = this.state;
    if (openOptions && wichOpen === wh) {
      this.setState({ openOptions: false });
    } else {
      this.setState({
        openOptions: open,
        wichOpen: wh,
      });
    }
  }

  handleCloseOptions = () => {
    this.setState({ openOptions: null });
  }

  isSelected = (id) => {
    const { selected } = this.state;
    return selected.indexOf(id) !== -1;
  }

  onFilter = (filters) => {
    const { data } = this.state;

    if (filters.length) {
      let mactched = [];
      filters.map((filter, index) => {
        mactched = (index === 0 ? data : mactched)
          .filter(td => td[filter.field] === filter.value);
        return null;
      });
      this.setState({
        isfiltered: true,
        filteredData: mactched,
        filters,
        page: 0,
      });
    } else {
      this.resetFilter();
    }
  }

  resetFilter = () => {
    this.setState({
      isfiltered: false,
      filteredData: [],
      filters: [],
    });
  }

  render() {
    const {
      classes,
      viewName,
      columnLists,
      changeColumnList,
      activated,
    } = this.props;
    const {
      headers,
      data,
      primaryKey,
      order, orderBy,
      selected,
      rowsPerPage,
      page,
      showEmptyRow,
      filteredData,
      isfiltered,
      filters,
      openOptions,
      wichOpen,
    } = this.state;
    const list = isfiltered ? filteredData : data;
    let columnsCount = 1;

    headers.map((col) => {
      if (col.label) {
        columnsCount += 1;
      }
      return null;
    });

    return (
      <Paper className={classes.root}>
        <ListToolbar
          numSelected={selected.length}
          count={list.length}
          onSearch={this.handleChangeSearch}
          resetSearch={this.handleRestSearch}
          toggleFilter={this.handleOpenOptions(true, 'filter')}
          toggleColumnList={this.handleOpenOptions(true, 'column')}
          resetSelectAll={this.handleSelectAllClick}
        />
        <div className={openOptions ? classes.tableWrapperNoScroll : classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby='tableTitle'>
            <ListHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={list.length}
              headers={headers}
              primaryKey={primaryKey}
            />
            <ListBody
              data={list}
              columns={headers}
              page={page}
              order={order}
              selected={selected}
              orderBy={orderBy}
              onClickRow={this.handleClick}
              rowsPerPage={parseInt(rowsPerPage, 10)}
              showEmptyRow={showEmptyRow}
              primaryKey={primaryKey}
              columnsCount={columnsCount}
              viewName={viewName}
            />
            <ListFooter
              page={page}
              count={list.length}
              columnsCount={columnsCount}
              rowsPerPage={parseInt(rowsPerPage, 10)}
              handleChangePage={this.handleChangePage}
              handleChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
          </Table>
          <Modal
            open={openOptions}
            disablePortal
            disableAutoFocus
            hideBackdrop
            classes={{
              root: classes.modalContainer,
            }}
          >
            <Paper className={classes.modalPaper}>
              {
                wichOpen === 'filter'
                  ? (
                    <FilterList
                      filters={filters}
                      list={headers}
                      onFilter={this.onFilter}
                      onReset={this.resetFilter}
                    />
                  )
                  : (
                    <ColumnList
                      viewName={viewName}
                      columnLists={columnLists}
                      changeColumnList={changeColumnList}
                      activated={activated}
                    />
                  )
              }
            </Paper>
          </Modal>
          {openOptions && <div onClick={this.handleOpenOptions(false)} className={classes.backdropModal} />}
        </div>
      </Paper>
    );
  }
}

ListView.propTypes = {
  classes: PropTypes.object.isRequired,
  headers: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  primaryKey: PropTypes.string.isRequired,
  viewName: PropTypes.string.isRequired,
  changeColumnList: PropTypes.func.isRequired,
  columnLists: PropTypes.array,
  activated: PropTypes.number,
};

ListView.defaultProps = {
  columnLists: [],
  activated: 0,
};

export default withStyles(styles)(ListView);
