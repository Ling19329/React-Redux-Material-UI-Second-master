import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { darkGreen, darkRed } from 'constants/colors';

export const desc = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

export const stableSort = (array, cmp) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
};

export const getSorting = (order, orderBy) => {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
};

export const clone = data => JSON.parse(JSON.stringify(data));

export const findDeviceById = (array, key, id) => array.find(a => a[key].toString() === id);

export const transformValuByType = (value, type, link, linkId) => {
  switch (type) {
    case 'bool':
      return value
        ? <CheckCircleIcon fontSize='small' style={{ color: darkGreen }} />
        : <RemoveCircleIcon fontSize='small' style={{ color: darkRed }} />;
    case 'link':
      return <Link to={`/${link}/${linkId}`}>{value}</Link>;
    case 'date':
      return value ? moment(value).format('MMM. DD, YYYY, HH:mm A.') : '';
    default: {
      if (typeof value === 'boolean') {
        return value ? 'Yes' : 'No';
      }
      return value;
    }
  }
};

export const findLabelByColumnName = (col) => {
  if (col.search('_pk') >= 0) {
    return null;
  }
  return col
    .replace('_fk', '')
    .replace('_', ' ')
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const transformColumListWithLabel = (data) => {
  const newData = [];
  data.map(d => newData.push({
    field: d.column_name,
    label: findLabelByColumnName(d.column_name),
  }));
  return newData;
};
