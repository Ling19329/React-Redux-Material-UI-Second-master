import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
// import { loadItem } from '../modules/actions';
import DetailViewComponents from '../components';

function mapDispatchToProps(dispatch) {
  return {
    loadItem: bindActionCreators(() => { }, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.session.authenticated,
    user: state.session.user,
    loaded: state.deviceView.loaded,
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailViewComponents));
