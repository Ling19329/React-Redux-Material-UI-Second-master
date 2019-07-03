import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RelatedList from 'components/RelatedList';

import {
  softwareInUse,
} from 'constants/queries';
import { styles } from './styles';
import './styles.css';

class Software extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    device: PropTypes.object.isRequired,
  }

  onClick = () => { }

  render() {
    const { classes, device } = this.props;
    return (
      <div className={classes.root}>
        <RelatedList {...softwareInUse} query={softwareInUse.query(device.device_pk)} />
      </div>
    );
  }
}

export default withStyles(styles)(Software);
