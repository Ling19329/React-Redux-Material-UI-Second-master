import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Input from 'components/Input';
import CheckBox from 'components/CheckBox';
import LoadingIndicator from 'components/LoadingIndicator';
import AvailableColumnList from './components/AvailableColumnList';
import SelectedColumnList from './components/SelectedColumnList';

import { styles } from './styles';

class AddColumnList extends Component {
  static propTypes = {
    table: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    onFetch: PropTypes.func.isRequired,
    addColumnList: PropTypes.func.isRequired,
    fileds: PropTypes.object.isRequired,
    isFetched: PropTypes.bool.isRequired,
  };

  state = {
    columnListName: 'Untitled',
    isDefault: false,
    filedList: [],
    isFetched: false,
    selected: [],
  }

  componentWillMount() {
    const { fileds, isFetched, table } = this.props;
    this.setState({
      filedList: fileds[table],
      isFetched,
    });
  }

  componentDidMount() {
    const { onFetch, table, fileds } = this.props;
    if (onFetch && !fileds[table]) {
      onFetch(table);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { fileds, isFetched, table } = nextProps;
    this.setState({
      filedList: fileds[table],
      isFetched,
    });
  }

  onChange = e => this.setState({ columnListName: e.target.value })

  onChangeIsDefault = e => this.setState({ isDefault: e.target.checked })

  onSelectToggle = (col) => {
    const { selected } = this.state;
    const currentIndex = selected.findIndex(ch => ch.field === col.field);
    const newSelected = [...selected];

    if (currentIndex === -1) {
      newSelected.push(col);
    } else {
      newSelected.splice(currentIndex, 1);
    }

    this.setState({
      selected: newSelected,
    });
  }

  onReOrderColumn = (firstIndex, secondIndex) => {
    const { selected } = this.state;
    const firstColumn = selected[firstIndex];
    const secondColmn = selected[secondIndex];
    selected[firstIndex] = secondColmn;
    selected[secondIndex] = firstColumn;
    this.setState({
      selected,
    });
  }

  handleDone = () => {
    const { onClose, addColumnList, table } = this.props;
    const { columnListName, isDefault, selected } = this.state;
    const data = {
      name: columnListName,
      isDefault,
      columnList: selected,
    };

    if (addColumnList) {
      addColumnList(data, table);
    }

    this.setState({ isDefault: false, selected: [] }, () => {
      if (onClose) {
        onClose();
      }
    });
  }

  render() {
    const {
      classes, open, onClose,
    } = this.props;
    const {
      isDefault, isFetched, filedList, selected,
    } = this.state;

    const { columnListName } = this.state;
    return (
      <Dialog
        open={open}
        onClose={onClose}
        classes={{
          paper: classes.dialogRoot,
        }}
      >
        <DialogTitle classes={{ root: classes.dialogTitle }}>Add Column List</DialogTitle>
        {!isFetched && <LoadingIndicator />}
        <Paper className={classes.contentsRoot}>
          <DialogContent classes={{ root: classes.dialogContnet }}>
            <Grid container spacing={8}>
              <Grid item xs={6} classes={{ item: classes.contents }}>
                <div className={classes.input}>
                  <Input label='Name' id='columnListName' onChange={this.onChange} value={columnListName} />
                </div>
                <CheckBox label='Make this the default column list' onChange={this.onChangeIsDefault} checked={isDefault} />
                <AvailableColumnList list={filedList} selected={selected} onToggle={this.onSelectToggle} />
              </Grid>
              <Grid item xs={6}>
                <SelectedColumnList selected={selected} onRemove={this.onSelectToggle} onMove={this.onReOrderColumn} />
              </Grid>
            </Grid>
          </DialogContent>
        </Paper>

        <DialogActions classes={{ root: classes.action }}>
          <Button onClick={onClose} color='secondary'>Cancel</Button>
          <Button onClick={this.handleDone} color='primary'>Done</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(AddColumnList);
