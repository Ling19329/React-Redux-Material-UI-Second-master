import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RelatedList from 'components/RelatedList';
import {
  cpuMemoryHardDisk,
  osSystems,
  rackInfo,
  connectivity,
  ipAddress,
  deviceAlias,
  deviceNonAuth,
} from 'constants/queries';

import { styles } from './styles';
import './styles.css';

const Properties = ({ classes, device }) => (
  <div className={classes.root}>
    <RelatedList {...cpuMemoryHardDisk} query={cpuMemoryHardDisk.query(device.device_pk)} />
    <RelatedList {...osSystems} query={osSystems.query(device.device_pk)} />
    <RelatedList {...rackInfo} query={rackInfo.query(device.device_pk)} />
    <RelatedList {...connectivity} query={connectivity.query(device.device_pk)} />
    <RelatedList {...ipAddress} query={ipAddress.query(device.device_pk)} />
    <RelatedList {...deviceAlias} query={deviceAlias.query(device.device_pk)} />
    <RelatedList {...deviceNonAuth} query={deviceNonAuth.query(device.device_pk)} />
  </div>
);

Properties.propTypes = {
  classes: PropTypes.object.isRequired,
  device: PropTypes.object.isRequired,
};

export default withStyles(styles)(Properties);
