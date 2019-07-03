import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { styles } from './styles';

const CollapsedItem = ({ classes, onClick }) => {
  return <MoreHorizIcon className={classes.collapsed} onClick={onClick} />;
};

CollapsedItem.propTypes = {
  classes: PropTypes.object,
  onClick: PropTypes.func,
};

CollapsedItem.defaultProps = {
  classes: {},
  onClick: () => { },
};

export default withStyles(styles)(CollapsedItem);
