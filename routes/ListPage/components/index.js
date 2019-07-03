/* eslint-disable no-param-reassign */
/* eslint-disable react/no-unused-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListView from 'components/ListView';
import LoadingIndicator from 'components/LoadingIndicator';
import Error from 'components/Error';
import { defaults } from 'constants/config';
import './styles.css';

/**
 * @name ListPage
 * @returns {JSX}
 */
class ListPage extends Component {
  static propTypes = {
    onFetch: PropTypes.func.isRequired,
    isFetched: PropTypes.bool.isRequired,
    list: PropTypes.array.isRequired,
    columnLists: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    fetchError: PropTypes.object,
  };

  static defaultProps = {
    fetchError: null,
  }

  state = {
    name: '',
    list: [],
    isFetched: false,
    columnList: [],
    columnLists: [],
    activatedColumnList: -1,
  }

  componentWillMount() {
    const { match } = this.props;
    const { name, type } = match.params;

    this.setState({ name, type, activatedColumnList: -1 }, () => {
      this.onFetchData(match.params.name, match.params.type);
    });
  }

  componentWillReceiveProps(nextProps) {
    const { state } = this;
    const oldName = state.name;
    const oldType = state.type;
    const newName = nextProps.match.params.name;
    const newType = nextProps.match.params.type;

    if (oldName !== newName || oldType !== newType) {
      this.setState({ name: newName, type: newType, activatedColumnList: -1 }, () => {
        this.onFetchData(newName, newType);
      });
    } else {
      this.setStateValues(nextProps);
    }
  }

  onFetchData(name, type) {
    const { onFetch } = this.props;
    if (onFetch) {
      onFetch(name, type);
    }
  }

  setStateValues(props) {
    const {
      isFetched,
      list,
      columnLists,
      fetchError,
      match,
    } = props;
    const { name, type } = match.params;
    const { activatedColumnList } = this.state;

    let columnList = [];
    if (activatedColumnList < 0) {
      columnList = defaults[name] ? defaults[name].column : [];
    } else {
      columnList = columnLists[name][activatedColumnList].columnList;
    }

    columnList.map((column) => {
      let unique = false;
      if (column.label && column.field !== 'name' && column.field) {
        const field = column.field.search('_fk') !== -1 ? `${column.field}_name` : column.field;
        unique = [...new Set(list.map(device => device[field]))];
      }
      column.unique = unique;
      return null;
    });

    this.setState({
      fetchError,
      isFetched,
      list,
      name,
      type,
      columnList,
      columnLists: columnLists[name],
    });
  }

  handleChangeColumnList = (index) => {
    const { columnLists, name, type } = this.state;
    const { onFetch } = this.props;
    let columnList;

    if (index - 1 >= 0) {
      columnList = columnLists[index - 1].columnList;
    }

    if (onFetch) {
      this.setState({ activatedColumnList: index - 1 });
      onFetch(name, type, columnList);
    }
  }

  render() {
    const {
      isFetched,
      list,
      name,
      columnList,
      columnLists,
      activatedColumnList,
      fetchError,
    } = this.state;

    const { history } = this.props;
    return (
      <div className='ListPage'>
        {!isFetched && <LoadingIndicator />}
        {
          (isFetched && fetchError) && <Error msg={fetchError} history={history} />
        }
        <ListView
          items={list}
          headers={columnList}
          columnLists={columnLists}
          primaryKey={`${name}_pk`}
          viewName={name}
          changeColumnList={this.handleChangeColumnList}
          activated={activatedColumnList + 1}
        />
      </div>
    );
  }
}

export default ListPage;
