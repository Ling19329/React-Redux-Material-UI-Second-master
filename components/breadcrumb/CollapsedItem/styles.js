import { emphasize } from '@material-ui/core/styles/colorManipulator';

export const styles = theme => ({
  collapsed: {
    width: 24,
    height: 16,
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.grey[700],
    borderRadius: 2,
    marginLeft: theme.spacing.unit / 2,
    marginRight: theme.spacing.unit / 2,
    cursor: 'pointer',
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[200],
    },
    '&:active': {
      boxShadow: theme.shadows[0],
      backgroundColor: emphasize(theme.palette.grey[200], 0.12),
    },
  },
});
