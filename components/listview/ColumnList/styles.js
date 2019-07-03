import { gray } from 'constants/colors';

export const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  paper: {
    padding: theme.spacing.unit,
    display: 'flex',
  },
  list: {
    height: 'calc(100% - 60px)',
    overflowY: 'auto',
  },
  listItem: {
    borderBottom: `1px ${gray} solid`,
  },
});
