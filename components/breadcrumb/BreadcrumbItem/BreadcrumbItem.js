import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import { DefaultComponent } from './DefaultComponent';
import { styles } from './styles';

class BreadcrumbItem extends React.PureComponent {
  render() {
    const {
      classes,
      className,
      component: Component,
      icon: iconProp,
      label,
      active,
      disableGutters,
      tabIndex,
      onClick,
      ...other
    } = this.props;

    let newTabIndex = tabIndex;

    if (!newTabIndex) {
      newTabIndex = onClick ? 0 : -1;
    }

    let icon = null;
    if (iconProp && React.isValidElement(iconProp)) {
      icon = React.cloneElement(iconProp, {
        className: classNames(classes.icon, iconProp.props.className),
      });
    }
    return Component ? (
      <Component
        icon={icon}
        label={label}
        className={classNames(
          {
            [classes.gutters]: !disableGutters,
            [classes.active]: active,
          },
          className,
        )}
        tabIndex={newTabIndex}
        onClick={onClick}
        {...other}
      />
    ) : (
      <DefaultComponent
        icon={icon}
        label={label}
        active={active}
        className={classNames(
          classes.button,
          {
            [classes.gutters]: !disableGutters,
            [classes.active]: active,
          },
          className,
        )}
        tabIndex={newTabIndex}
        onClick={onClick}
        {...other}
      />
    );
  }
}

BreadcrumbItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
  disableGutters: PropTypes.bool,
  href: PropTypes.string,
  // target: PropTypes.oneOf(['_blank', '_parent', '_self', '_top', '']),
};

BreadcrumbItem.defaultProps = {
  className: '',
  icon: null,
  label: '',
  onClick: () => { },
  component: null,
  href: '',
  disableGutters: false,
  active: false,
  // target: '_self',
};

export default withStyles(styles, { name: 'MuiBreadcrumbItem' })(
  BreadcrumbItem,
);
