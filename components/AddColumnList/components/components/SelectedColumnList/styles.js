import { gray } from 'constants/colors';

export const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 325,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 390,
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    paddingTop: theme.spacing.unit / 2 * 3,
    paddingBottom: theme.spacing.unit / 2 * 3,
    borderBottom: `1px ${gray} solid`,
  },
  listItemContainer: {
    '&:first-child': {
      borderTop: `1px ${gray} solid`,
    },
  },
  iconBtn: {
    padding: theme.spacing.unit / 2,
  },
});
