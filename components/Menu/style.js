import { gray } from 'constants/colors';

export const styles = (theme) => {
  return {
    root: {
      display: 'flex',
      minWidth: 90,
    },
    popper: {
      zIndex: 1,
    },
    paper: {
      minWidth: theme.spacing.unit * 20,
    },
    moreIcon: {
      position: 'absolute',
      fontSize: 14,
      right: theme.spacing.unit / 2,
      color: theme.palette.grey[600],
    },
    menuList: {
      padding: 0,
    },
    menuItem: {
      borderBottom: `1px ${gray} solid`,
      padding: `${theme.spacing.unit / 2}px ${theme.spacing.unit * 2}px`,
      fontSize: 14,
    },
  };
};
