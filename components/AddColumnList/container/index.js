import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddColumnListComponent from '../components';
import { fetchAvailableField, addColumnList } from '../modules/actions';

function mapStateToProps(state) {
  return {
    isAuthenticated: state.session.authenticated,
    user: state.session.user,
    fileds: state.fieldList.fields,
    isFetched: state.fieldList.isFetched,
    fetchErr: state.fieldList.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetch: bindActionCreators(fetchAvailableField, dispatch),
    addColumnList: bindActionCreators(addColumnList, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddColumnListComponent);
