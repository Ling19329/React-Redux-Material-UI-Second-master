import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import { actionsStyles } from './ActionStyles';

class TablePaginationActions extends React.Component {
  state = {
    pageNumClicked: false,
    pageNumberError: false,
    pageNumber: '',
  }

  componentWillMount() {
    const { page } = this.props;
    this.setState({ pageNumber: page + 1 });
  }

  componentWillReceiveProps(nextProps) {
    const { page } = nextProps;
    this.setState({ pageNumber: page + 1 });
  }

  handleFirstPageButtonClick = (event) => {
    const { onChangePage } = this.props;
    onChangePage(event, 0);
  };

  handleBackButtonClick = (event) => {
    const { onChangePage, page } = this.props;
    onChangePage(event, page - 1);
  };

  handleNextButtonClick = (event) => {
    const { onChangePage, page } = this.props;
    onChangePage(event, page + 1);
  };

  handleLastPageButtonClick = (event) => {
    const { onChangePage, count, rowsPerPage } = this.props;

    onChangePage(
      event,
      Math.max(0, Math.ceil(count / rowsPerPage) - 1),
    );
  };

  handlePageNumberClick = () => {
    this.setState(state => ({ pageNumClicked: !state.pageNumClicked }));
  }

  handleChangePageNumber = (e) => {
    const { count, rowsPerPage } = this.props;
    const totalPage = Math.round(count / rowsPerPage);
    if (e.target.value > totalPage) {
      this.setState({ pageNumberError: true });
    } else {
      this.setState({ pageNumberError: false, pageNumber: e.target.value });
    }
  }

  handleKeyUpPageNumber = (e) => {
    if (e.keyCode === 13) {
      const { onChangePage } = this.props;
      const { pageNumber } = this.state;
      this.setState({ pageNumClicked: false });
      onChangePage(null, parseInt(pageNumber - 1 <= 0 ? 0 : pageNumber - 1, 10));
    }
  }

  render() {
    const {
      classes, count, page, rowsPerPage, theme,
    } = this.props;

    const { pageNumClicked, pageNumber, pageNumberError } = this.state;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label='First Page'
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label='Previous Page'
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        {
          pageNumClicked ? (
            <Input
              autoFocus
              type='number'
              placeholder='Page Number'
              value={pageNumber}
              error={pageNumberError}
              className={classes.input}
              onBlur={this.handlePageNumberClick}
              onChange={this.handleChangePageNumber}
              onKeyUp={this.handleKeyUpPageNumber}
            />
          )
            : (
              <Typography classes={{ root: classes.centerText }} onClick={this.handlePageNumberClick}>
                {`${page * rowsPerPage + 1} ~ ${page * rowsPerPage + 10} of ${count}`}
              </Typography>
            )
        }

        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label='Next Page'
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label='Last Page'
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(actionsStyles, { withTheme: true })(TablePaginationActions);
