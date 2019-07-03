import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RelatedList from 'components/RelatedList';

import {
  parts,
} from 'constants/queries';
import { styles } from './styles';
import './styles.css';

const Parts = ({ classes, device }) => (
  <div className={classes.root}>
    <RelatedList {...parts} query={parts.query(device.device_pk)} />
  </div>
);

Parts.propTypes = {
  classes: PropTypes.object.isRequired,
  device: PropTypes.object.isRequired,
};

export default withStyles(styles)(Parts);
