import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

import { styles } from './styles';

class CheckboxList extends React.Component {
  handleToggle = column => () => {
    const { onToggle } = this.props;
    if (onToggle) {
      onToggle(column);
    }
  };

  isChecked(column) {
    const { selected } = this.props;
    const currentIndex = selected.findIndex(ch => ch.field === column.field);
    return currentIndex !== -1;
  }

  render() {
    const { classes, list } = this.props;
    return (
      <List className={classes.root}>
        {list.map((item, index) => {
          if (item.label) {
            return (
              <ListItem
                key={index}
                role={undefined}
                button
                onClick={this.handleToggle(item)}
                classes={{ root: classes.listItem }}
              >
                <Checkbox
                  checked={this.isChecked(item)}
                  tabIndex={-1}
                  disableRipple
                  color='primary'
                  classes={{ root: classes.checkbox }}
                />
                <ListItemText primary={item.label} />
              </ListItem>
            );
          }
          return null;
        })}
      </List>
    );
  }
}

CheckboxList.propTypes = {
  classes: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  list: PropTypes.array,
  selected: PropTypes.array,
};

CheckboxList.defaultProps = {
  list: [],
  selected: [],
};

export default withStyles(styles)(CheckboxList);
