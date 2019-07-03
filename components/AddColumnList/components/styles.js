import { gray } from 'constants/colors';

export const styles = theme => ({
  dialogRoot: {
    minWidth: 650,
    maxWidth: 650,
  },
  contentsRoot: {
    borderRadius: 0,
    borderTop: `1px ${gray} solid`,
    margin: `0px ${theme.spacing.unit * 2}px`,
  },
  dialogTitle: {
    padding: theme.spacing.unit * 2,
  },
  dialogContnet: {
    padding: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 2}px !important`,
  },
  contents: {
    borderRight: `1px ${gray} solid`,
  },
  action: {
    padding: theme.spacing.unit / 2,
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
  input: {
    padding: `${theme.spacing.unit / 2}px ${theme.spacing.unit * 2}px 0px`,
  },
});
