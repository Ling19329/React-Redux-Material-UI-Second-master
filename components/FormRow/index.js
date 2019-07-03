import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import { styles } from './styles';
import './styles.css';

class FormRow extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
  }

  onClick = () => { }

  render() {
    const { classes, children } = this.props;
    return (
      <ListItem component='div' classes={{ root: classes.root }}>
        {children}
      </ListItem>
    );
  }
}

export default withStyles(styles)(FormRow);
