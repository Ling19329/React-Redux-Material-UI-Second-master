
import { lighten } from '@material-ui/core/styles/colorManipulator';

export const styles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  spacer: {
    flex: '1 1 100%',
  },
  actionsContainer: {
    color: theme.palette.text.secondary,
  },
  actions: {
    display: 'flex',
  },
  title: {
    flex: '0 0 auto',
  },
  search: {
    position: 'relative',
    margin: 'auto',
  },
  searchButton: {
    position: 'absolute',
    right: 0,
    padding: 8,
  },
  divider: {
    width: 1,
    height: 28,
    position: 'absolute',
    top: 5,
    right: 40,
  },
  input: {
    flex: 1,
    minWidth: 165,
    textAlign: 'left',
    padding: '10px 40px 10px 10px',
  },
  inputLabel: {
    transform: 'translate(14px, 12px) scale(1)',
  },
  formControl: {
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit / 2,
    marginBottom: theme.spacing.unit / 2,
    minWidth: 200,
  },
});
