import { gray, darkRed, darkGreen } from 'constants/colors';

export const styles = theme => ({
  root: {
    margin: 0,
    padding: `${theme.spacing.unit + 2}px ${theme.spacing.unit}px`,
    paddingRight: theme.spacing.unit * 2,
    borderRight: `1px ${gray} solid`,
    display: 'flex',
    '&:last-child': {
      borderRight: 0,
    },
  },
  label: {
    textTransform: 'capitalize',
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  faild: {
    color: darkRed,
  },
  success: {
    color: darkGreen,
  },
  inputLabel: {
    transform: 'translate(14px, 10px) scale(1)',
  },
});
