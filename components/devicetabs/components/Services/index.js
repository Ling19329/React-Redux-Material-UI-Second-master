import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RelatedList from 'components/RelatedList';

import {
  seviceDetail,
} from 'constants/queries';
import { styles } from './styles';
import './styles.css';

class Services extends React.Component {
  static propTypes = {
    device: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
  }

  onClick = () => { }

  render() {
    const { classes, device } = this.props;
    return (
      <div className={classes.root}>
        <RelatedList {...seviceDetail} query={seviceDetail.query(device.device_pk)} />
      </div>
    );
  }
}

export default withStyles(styles)(Services);
