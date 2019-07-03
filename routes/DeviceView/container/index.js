import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import DeviceViewComponents from '../components';
import { loadDevice } from '../modules/actions';

function mapStateToProps(state) {
  return {
    isAuthenticated: state.session.authenticated,
    user: state.session.user,
    loaded: state.deviceView.loaded,
    loadErr: state.deviceView.error,
    device: state.deviceView.device,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadDevice: bindActionCreators(loadDevice, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeviceViewComponents));
