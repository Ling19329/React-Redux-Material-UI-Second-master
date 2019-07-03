import React from 'react';
import PropTypes from 'prop-types';

export const DefaultSeparator = ({ className, separatorText }) => {
  return <div className={className}>{separatorText}</div>;
};

DefaultSeparator.propTypes = {
  className: PropTypes.string,
  separatorText: PropTypes.string,
};

DefaultSeparator.defaultProps = {
  className: '',
  separatorText: '',
};
