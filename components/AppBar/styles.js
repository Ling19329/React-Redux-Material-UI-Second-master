import { white, black, bgLightGray } from 'constants/colors';

export const styles = theme => ({
  tooBarRoot: {
    backgroundColor: white,
    color: black,
    paddingLeft: 45,
    paddingRight: 45,
  },
  paper: {
    padding: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2 + 4,
    backgroundColor: bgLightGray,
    borderRadius: 0,
  },
});
