import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RelatedList from 'components/RelatedList';

import {
  deviceURL,
  powerUnitPorts,
  BIOSInfo,
  customFields,
  fileAttachments,
  deviceExtendedData,
  discoveryQuality,
} from 'constants/queries';

import { styles } from './styles';
import './styles.css';

const Other = ({ classes, device }) => (
  <div className={classes.root}>
    <RelatedList {...deviceURL} query={deviceURL.query(device.device_pk)} />
    <RelatedList {...powerUnitPorts} query={powerUnitPorts.query(device.device_pk)} />
    <RelatedList {...BIOSInfo} query={BIOSInfo.query(device.device_pk)} />
    <RelatedList {...customFields} query={customFields.query(device.device_pk)} />
    <RelatedList {...fileAttachments} query={fileAttachments.query(device.device_pk)} />
    <RelatedList {...deviceExtendedData} query={deviceExtendedData.query(device.device_pk)} />
    <RelatedList {...discoveryQuality} query={discoveryQuality.query(device.device_pk)} />
  </div>
);

Other.propTypes = {
  classes: PropTypes.object.isRequired,
  device: PropTypes.object.isRequired,
};

export default withStyles(styles)(Other);
