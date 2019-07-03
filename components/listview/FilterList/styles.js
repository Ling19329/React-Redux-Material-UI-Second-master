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
    paddingTop: 2,
    paddingBottom: 2,
  },
  formControl: {
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit / 2,
    marginBottom: theme.spacing.unit / 2,
    width: '100%',
  },
  inputLabel: {
    transform: 'translate(14px, 12px) scale(1)',
  },
  input: {
    flex: 1,
    minWidth: 165,
    textAlign: 'left',
    padding: '10px 40px 10px 10px',
  },
});
