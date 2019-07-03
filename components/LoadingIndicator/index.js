import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import './styles.css';

const Progress = ({ size }) => (
  <div className='LoadingIndicator'>
    <CircularProgress
      classes={{
        root: 'LoadingIndicator__progress',
      }}
      size={size}
    />
  </div>
);

Progress.propTypes = {
  size: PropTypes.number,
};

Progress.defaultProps = {
  size: 64,
};

export default Progress;
