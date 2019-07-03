import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import CustomSelect from './CustomSelect';
import { styles } from './styles';
import './styles.css';

class FilterList extends React.Component {
  state = {
    filters: [],
  }

  componentWillMount() {
    const { filters } = this.props;
    this.setState({ filters });
  }

  componentWillReceiveProps(nextProps) {
    const { filters } = nextProps;
    this.setState({ filters });
  }

  addFilters = (filter) => {
    const { filters } = this.state;
    const isExist = filters.findIndex(f => f.field === filter.field);
    if (isExist !== -1) {
      filters.splice(isExist, 1);
    }
    if (filter.value.search('_value') !== -1) {
      const value = filter.value.replace('_value', '');
      filters.push({
        field: filter.field,
        value: (value === 'true' || value === 'false') ? Boolean(value) : value,
      });
    }
    this.setState({ filters }, () => {
      const { onFilter } = this.props;
      onFilter(filters);
    });
  }

  resetFilters = () => {
    const { onReset } = this.props;
    onReset();
  }

  render() {
    const { classes, list } = this.props;
    const { filters } = this.state;

    return (
      <div className='FilterList'>
        <Paper classes={{ root: classes.paper }}>
          <Icon color='primary' className='FilterList__Icon'>tune</Icon>
          <Typography variant='subtitle1'>Filter</Typography>
          {
            Boolean(filters.length) && (
              <Tooltip title='Reset Filters'>
                <Icon onClick={this.resetFilters} className='FilterList__Icon__RemoveAll'>clear</Icon>
              </Tooltip>
            )
          }
        </Paper>
        <List component='div' classes={{ root: classes.list }}>
          {list.map((item, index) => {
            if (item.unique && item.field.search('_pk') === -1) {
              // TODO need to find better solution to find selected filter before
              const filter = filters.find(f => f.field.replace('_name', '') === item.field);
              return (
                <ListItem key={index} classes={{ root: classes.listItem }} button>
                  <CustomSelect filter={filter} item={item} classes={classes} addFilters={this.addFilters} />
                </ListItem>
              );
            }
            return null;
          })}
        </List>
      </div>
    );
  }
}

FilterList.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired,
};

export default withStyles(styles)(FilterList);
