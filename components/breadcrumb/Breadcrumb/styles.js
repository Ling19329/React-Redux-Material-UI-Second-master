const height = 24;

export const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  separator: {
    userSelect: 'none',
    display: 'inline-block',
    height,
    lineHeight: `${height}px`,
    color: theme.palette.grey[400],
    marginLeft: theme.spacing.unit / 2,
    marginRight: theme.spacing.unit / 2,
    paddingLeft: theme.spacing.unit / 4,
    paddingRight: theme.spacing.unit / 4,
  },
});
