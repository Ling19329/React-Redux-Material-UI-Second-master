/* eslint-disable no-unused-vars */
import apiFetch from 'utils/apiFetch';
import { BASE_END_POINT } from 'constants/apiConf';
import { defaults } from 'constants/config';
import {
  FETCH_LIST_INIT,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
} from './types';

function concatFields(related, namefield, field, combineSymbol) {
  const fields = namefield.split(' ');
  if (fields.length > 1) {
    let query = ', concat(';
    fields.map((f, i) => {
      query += i === 0 ? `view_${related}_v1.${f}` : `,'${combineSymbol || ','} ', view_${related}_v1.${f}`;
    });
    query += `) as ${field}_name`;
    return query;
  }
  return `, view_${related}_v1.${namefield} as ${field}_name`;
}

function buildQuery(name, type, columns) {
  // TODO need to find a way to build query each category
  const cl = columns || (defaults[name] ? defaults[name].column : []);
  const hasPk = cl.find(c => c.field === `${name}_pk`);
  let query = hasPk ? '' : `${name}_pk`;
  let join = '';

  cl.map((column, i) => {
    if (column.field) {
      query += `${hasPk && i === 0 ? '' : ', '}view_${name}_v1.${column.condition_field ? column.condition_field : column.field}`;
      if (column.field.search('_fk') !== -1) {
        const related = column.field.replace('_fk', '');
        if (column.namefield) {
          query += concatFields(related, column.namefield, column.field, column.combine_symbol);
        } else {
          query += `, view_${related}_v1.name as ${column.field}_name`;
        }
        join += `left join view_${related}_v1 on view_${name}_v1.${column.condition_field ? column.condition_field : column.field}=view_${related}_v1.${related}_pk `;
      }
    }
    return '';
  });
  if (type) {
    return `SELECT ${query} FROM view_${name}_v1 ${join}where view_${name}_v1.type = '${type}' order by ${name}_pk`;
  }
  return `SELECT ${query} FROM view_${name}_v1 ${join}order by ${name}_pk`;
}

export function fetchListInit() {
  return {
    type: FETCH_LIST_INIT,
  };
}

export function fetchListSuccess(data) {
  return {
    type: FETCH_LIST_SUCCESS,
    payload: data,
  };
}

export function fetchListFailure(error) {
  return {
    type: FETCH_LIST_FAILURE,
    payload: error,
  };
}

export function fetchList(name, type, columns) {
  return (dispatch) => {
    dispatch(fetchListInit());
    const params = {
      output_type: 'json',
      query: buildQuery(name, type, columns),
    };

    apiFetch('GET', { endPoint: BASE_END_POINT }, params)
      .then((list) => {
        const isInvalid = list.constructor === {}.constructor || !list;
        dispatch(fetchListSuccess(isInvalid ? [] : list));
      })
      .catch((err) => {
        dispatch(fetchListFailure(err));
      });
  };
}
