import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { styles } from './styles';
import './styles.css';

/**
 * @name  Input
 * @param   {object}  classes
 * @param   {string}  label
 * @param   {func}  onChange
 * @param   {string}  value
 * @param   {string}  type
 * @param   {string}  id
 * @returns {JSX}
 */

const Input = ({
  classes,
  label,
  onChange,
  value,
  type,
  id,
}) => (
  <FormControl fullWidth classes={{ root: classes.root }}>
    <TextField
      label={label}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      type={type}
      variant='outlined'
      InputProps={{
        classes: {
          input: classes.input,
        },
      }}
      InputLabelProps={{
        classes: {
          root: classes.inputLabel,
        },
      }}
    />
  </FormControl>
);

Input.propTypes = {
  value: PropTypes.any,
  type: PropTypes.string,
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  value: '',
  type: 'text',
};

export default withStyles(styles)(Input);
