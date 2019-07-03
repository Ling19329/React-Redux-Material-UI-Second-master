import { emphasize } from '@material-ui/core/styles/colorManipulator';
import { mediumGray } from 'constants/colors';

const height = 24;

export const styles = theme => ({
  button: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.fontSize,
    height,
    lineHeight: `${height}px`,
    color: theme.palette.grey[800],
    borderRadius: 2,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[100],
    },
    '&:active': {
      boxShadow: theme.shadows[0],
      backgroundColor: emphasize(theme.palette.grey[100], 0.12),
    },
  },
  active: {
    color: mediumGray,
    fontWeight: theme.typography.fontWeightMedium,
  },
  gutters: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
  icon: {
    marginRight: theme.spacing.unit / 2,
    width: height / 1.2,
    height: height / 1.2,
    color:
      theme.palette.type === 'light'
        ? theme.palette.grey[700]
        : theme.palette.grey[300],
  },
});
