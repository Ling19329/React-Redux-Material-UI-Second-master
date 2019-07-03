import green from '@material-ui/core/colors/green';

export const styles = theme => ({
  formLabel: {
    marginLeft: theme.spacing.unit,
  },
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
});
