import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LoadingIndicator from 'components/LoadingIndicator';
import ToolBar from 'components/DetailToolBar';
import DeviceDetail from 'components/DeviceDetail';
import Error from 'components/Error';
import DeviceTabs from 'components/DeviceTabs';
import { findDeviceById } from 'utils/helpers';

import { styles } from './styles';
import './styles.css';

/**
* @name DeviceView
* @returns {JSX}
*/
class DeviceView extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    loaded: PropTypes.bool.isRequired,
    loadDevice: PropTypes.func.isRequired,
    device: PropTypes.array.isRequired,
    loadErr: PropTypes.object.isRequired,
  };

  state = {
    loaded: true,
    primaryKey: 'device_pk',
  }

  componentWillMount() {
    const {
      match,
      loaded,
      loadErr,
    } = this.props;
    this.setState({
      deviceId: match.params.deviceId,
      loaded,
      device: {},
      loadErr,
    });
  }

  componentDidMount() {
    const { loadDevice } = this.props;
    if (loadDevice) {
      const { deviceId } = this.state;
      loadDevice(deviceId);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { device, loaded, loadErr } = nextProps;
    const { deviceId, primaryKey } = this.state;
    const loadedDevice = findDeviceById(device, primaryKey, deviceId);
    this.setState({ device: loadedDevice, loaded, loadErr });
  }

  render() {
    const {
      history,
      classes,
    } = this.props;
    const {
      loaded,
      // deviceId,
      device,
      loadErr,
    } = this.state;

    return (
      <div className='DeviceView'>
        {!loaded && <LoadingIndicator />}
        {
          loadErr.message && <Error msg={loadErr.message} history={history} />
        }
        {
          (!loadErr.message && loaded) && (
            <div className={classes.wrapper}>
              <Paper classes={{ root: classes.root }}>
                <ToolBar type={device.type} name={device.name} viewName='device' />
                <DeviceDetail device={device} />
                {/* <p style={{ wordBreak: 'break-all', fontSize: 20 }}>
                {
                  JSON.stringify(device)
                }
              </p> */}
              </Paper>
              <DeviceTabs device={device} />
            </div>
          )
        }
      </div>
    );
  }
}

export default withStyles(styles)(DeviceView);
