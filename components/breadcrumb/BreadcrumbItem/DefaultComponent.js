import React from 'react';
import { Link } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';

export const DefaultComponent = ({
  className,
  label,
  icon,
  active,
  tabIndex,
  onClick,
  to,
  ...rest
}) => {
  return (
    <ButtonBase
      variant='default'
      component={to ? Link : 'button'}
      to={to}
      color='primary'
      className={className}
      tabIndex={tabIndex}
      onClick={onClick}
      disabled={active}
      {...rest}
    >
      {icon}
      {label}
    </ButtonBase>
  );
};
