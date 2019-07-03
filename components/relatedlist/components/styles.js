
import { primary } from 'constants/colors';

export const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing.unit * 3,
    position: 'relative',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  title: {
    textTransform: 'capitalize',
    backgroundColor: primary,
    color: theme.palette.common.white,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
  row: {
    height: theme.spacing.unit * 5,
  },
  cell: {
    padding: theme.spacing.unit,
  },
});
