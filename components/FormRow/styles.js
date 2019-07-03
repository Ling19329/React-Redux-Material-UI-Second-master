import { gray } from 'constants/colors';

export const styles = theme => ({
  root: {
    borderBottom: `1px ${gray} solid`,
    paddingTop: 0,
    paddingBottom: 0,
  },
  input: {
    padding: theme.spacing.unit,
  },
  inputLabel: {
    transform: 'translate(14px, 10px) scale(1)',
  },
});
