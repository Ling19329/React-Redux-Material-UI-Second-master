import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Draggable, Droppable } from 'react-drag-and-drop';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { styles } from './styles';

class SelectedList extends React.Component {
  removeItem = column => () => {
    const { onRemove } = this.props;
    if (onRemove) {
      onRemove(column);
    }
  };

  onMoveItem = (firstIndex, secondIndex) => {
    const { onMove } = this.props;
    if (onMove) {
      onMove(firstIndex, secondIndex);
    }
  }

  render() {
    const { classes, selected } = this.props;
    return (
      <List className={classes.root} component='div'>
        {selected.map((item, index) => {
          if (item.label) {
            return (
              <Droppable key={index} types={['first']} onDrop={data => this.onMoveItem(data.first, index)} className={classes.listItemContainer}>
                <Draggable type='first' data={index}>
                  <ListItem
                    ContainerComponent='div'
                    role={undefined}
                    button
                    classes={{ root: classes.listItem }}
                  >
                    <ListItemText primary={item.label} />
                    <ListItemSecondaryAction>
                      <IconButton aria-label='delete' onClick={this.removeItem(item)} classes={{ root: classes.iconBtn }}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </Draggable>
              </Droppable>
            );
          }
          return null;
        })}
      </List>
    );
  }
}

SelectedList.propTypes = {
  classes: PropTypes.object.isRequired,
  onMove: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  selected: PropTypes.array,
};

SelectedList.defaultProps = {
  selected: [],
};

export default withStyles(styles)(SelectedList);
