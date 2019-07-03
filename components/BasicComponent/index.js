import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';
import './styles.css';

class DetailTitle extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  onClick = () => { }

  render() {
    const { classes } = this.props;
    return (
      <h1 className={classes.root}>title</h1>
    );
  }
}

export default withStyles(styles)(DetailTitle);
