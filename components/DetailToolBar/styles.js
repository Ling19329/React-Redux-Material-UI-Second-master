import { gray } from 'constants/colors';

export const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: `1px ${gray} solid`,
    padding: `0px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
  },
  titleContainer: {
    display: 'flex',
  },
  title: {
    textTransform: 'capitalize',
  },
  button: {
    marginLeft: theme.spacing.unit,
    borderRadius: 0,
    '&:first-child': {
      marginLeft: 0,
    },
  },
  moreBtn: {
    minWidth: theme.spacing.unit * 6,
    padding: 0,
  },
  icon: {
    fontSize: 22,
  },
  divider: {
    marginTop: theme.spacing.unit * 2,
  },
});
