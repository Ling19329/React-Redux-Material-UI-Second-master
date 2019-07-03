export const styles = theme => ({
  root: {
    margin: `${theme.spacing.unit / 2}px 0px`,
    padding: theme.spacing.unit,
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    padding: `0px ${theme.spacing.unit * 4}px`,
    minHeight: 28,
  },
  errorBox: {
    padding: `0px ${theme.spacing.unit * 4}px`,
  },
});
