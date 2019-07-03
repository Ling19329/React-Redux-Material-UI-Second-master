import React from 'react';
// import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Divider from '@material-ui/core/Divider';

import { styles } from './styles';
import './styles.css';

class ListToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.InputLabelRef = React.createRef();
  }

  state = {
    searchTerm: '',
    searched: false,
    labelWidth: 50,
    action: '',
  }

  onClickHandler = () => {
    const { searched } = this.state;
    const { resetSearch } = this.props;
    if (!searched) {
      this.onSearch();
    } else {
      this.setState({
        searchTerm: '',
        searched: false,
      });
      resetSearch();
    }
  }

  onChangeHandler = (e) => {
    this.setState({
      searchTerm: e.target.value,
      searched: false,
    });
  }

  onKeyUpHander = (e) => {
    if (e.keyCode === 13) {
      this.onSearch();
    }
  }

  onSearch() {
    const { onSearch } = this.props;
    const { searchTerm } = this.state;
    if (onSearch) {
      onSearch(searchTerm);
      this.setState({ searched: true });
    }
  }

  onReset = (event) => {
    const { resetSelectAll } = this.props;
    this.setState({ action: '' });
    if (resetSelectAll) {
      resetSelectAll(event);
    }
  }

  onSelectAction = (event) => {
    this.setState({ action: event.target.value });
  }

  render() {
    const {
      numSelected, count, classes, toggleFilter, toggleColumnList,
    } = this.props;
    const {
      searchTerm, searched, action, labelWidth,
    } = this.state;

    return (
      <Toolbar
        className={classNames(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        <div className={classes.title}>
          {numSelected > 0 ? (
            <Typography color='inherit' variant='subtitle1'>
              {`${numSelected} of ${count} selected`}
            </Typography>
          ) : <Typography variant='h6' id='tableTitle'>Select Device to view</Typography>}
        </div>
        <div className={classes.spacer} />
        <div className={classes.actionsContainer}>
          {numSelected > 0 ? (
            <div className={classes.actions}>
              <FormControl variant='outlined' className={classes.formControl}>
                <InputLabel
                  ref={this.InputLabelRef}
                  classes={{
                    root: classes.inputLabel,
                  }}
                  htmlFor='outlined-action'
                >
                  Action
                </InputLabel>
                <Select
                  value={action}
                  onChange={this.onSelectAction}
                  classes={{
                    select: classes.input,
                  }}
                  input={(
                    <OutlinedInput
                      labelWidth={labelWidth}
                      name='action'
                      id='outlined-action'
                    />
                  )}
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <Tooltip title='Go'>
                <IconButton aria-label='Go'>
                  <OfflineBoltIcon color='primary' />
                </IconButton>
              </Tooltip>
              <Tooltip title='Reset'>
                <IconButton aria-label='Reset' onClick={this.onReset}>
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </div>
          )
            : (
              <div className={classes.actions}>
                <div className={classes.search}>
                  <TextField
                    onChange={this.onChangeHandler}
                    onKeyUp={this.onKeyUpHander}
                    value={searchTerm}
                    variant='outlined'
                    label='Search...'
                    InputProps={{
                      classes: {
                        input: classes.input,
                      },
                    }}
                    InputLabelProps={{
                      classes: {
                        root: classes.inputLabel,
                      },
                    }}
                  />
                  <Divider className={classes.divider} />
                  <IconButton onClick={this.onClickHandler} className={classes.searchButton} aria-label='Search'>
                    {searched && searchTerm ? <CloseIcon /> : <SearchIcon />}
                  </IconButton>
                </div>
                <Tooltip title='Clone'>
                  <IconButton aria-label='Clone'>
                    <FileCopyIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title='Add'>
                  <IconButton aria-label='Add'>
                    <AddCircleIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title='Column list'>
                  <IconButton aria-label='Column list' onClick={toggleColumnList}>
                    <ViewColumnIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title='Filter list'>
                  <IconButton aria-label='Filter list' onClick={toggleFilter}>
                    <FilterListIcon />
                  </IconButton>
                </Tooltip>

              </div>
            )}
        </div>
      </Toolbar>
    );
  }
}

ListToolbar.propTypes = {
  count: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onSearch: PropTypes.func.isRequired,
  resetSearch: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  toggleColumnList: PropTypes.func.isRequired,
  resetSelectAll: PropTypes.func.isRequired,
};

export default withStyles(styles)(ListToolbar);
