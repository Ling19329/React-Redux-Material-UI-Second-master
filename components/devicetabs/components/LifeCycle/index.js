import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RelatedList from 'components/RelatedList';

import {
  assetLifeCycle,
  assetProductCode,
  purchaseSupport,
} from 'constants/queries';

import { styles } from './styles';
import './styles.css';

const LifeCycle = ({ classes, device }) => (
  <div className={classes.root}>
    <RelatedList {...assetLifeCycle} query={assetLifeCycle.query(device.device_pk)} />
    <RelatedList {...assetProductCode} query={assetProductCode.query(device.device_pk)} />
    <RelatedList {...purchaseSupport} query={purchaseSupport.query(device.device_pk)} />
  </div>
);

LifeCycle.propTypes = {
  classes: PropTypes.object.isRequired,
  device: PropTypes.object.isRequired,
};

export default withStyles(styles)(LifeCycle);
