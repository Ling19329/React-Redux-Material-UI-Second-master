import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import ListPage from '../components';
import { fetchList } from '../modules/actions';

function mapStateToProps(state) {
  return {
    isAuthenticated: state.session.authenticated,
    user: state.session.user,
    fetchError: state.listView.error,
    list: state.listView.list,
    defaultColumnList: state.listView.defaultColumnList,
    columnLists: state.fieldList.columnLists,
    isFetched: state.listView.isFetched,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetch: bindActionCreators(fetchList, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListPage));
