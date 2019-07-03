import { backdrop, gray } from 'constants/colors';

export const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
    position: 'relative',
    overflowY: 'hidden',
  },
  tableWrapperNoScroll: {
    overflow: 'hidden',
    position: 'relative',
  },
  modalContainer: {
    width: 320,
    flexShrink: 0,
    position: 'absolute',
    left: 'unset',
    paddingRight: '0px !important',
    zIndex: 500,
  },
  modalPaper: {
    width: 320,
    height: '100%',
    borderRadius: 0,
    borderTop: `1px ${gray} solid`,
  },
  backdropModal: {
    backgroundColor: backdrop,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
