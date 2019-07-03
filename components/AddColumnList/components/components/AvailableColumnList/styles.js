import { gray } from 'constants/colors';

export const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 325,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
    backgroundColor: theme.palette.background.paper,
    borderTop: `1px ${gray} solid`,
  },
  checkbox: {
    padding: theme.spacing.unit / 2,
  },
  listItem: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    borderBottom: `1px ${gray} solid`,
    '&:first-child': {
      borderTop: `1px ${gray} solid`,
    },
  },
});
