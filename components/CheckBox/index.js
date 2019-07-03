import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { styles } from './styles';

const CustomColorCheckBox = ({
  checked, onChange, classes, label,
}) => (
  <FormControlLabel
    control={(
      <Checkbox
        checked={checked}
        onChange={onChange}
        classes={{
          root: classes.root,
          checked: classes.checked,
        }}
      />
    )}
    label={label}
    className={classes.formLabel}
  />
);

CustomColorCheckBox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

CustomColorCheckBox.defaultProps = {
  checked: false,
  label: 'Check Box',
};

export default withStyles(styles)(CustomColorCheckBox);
