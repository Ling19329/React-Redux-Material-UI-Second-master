import { darkGray } from 'constants/colors';


export const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
    display: 'flex',
    justifyContent: 'center',
  },
  centerText: {
    color: darkGray,
    padding: '15px 5px',
  },
  input: {
    margin: theme.spacing.unit,
    width: 120,
  },
});
