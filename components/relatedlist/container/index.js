import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RelatedList from '../components';
import { fetchRelatedData } from '../modules/actions';

function mapStateToProps(state) {
  return {
    loaded: state.relatedData.loaded,
    data: state.relatedData.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetch: bindActionCreators(fetchRelatedData, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RelatedList);
