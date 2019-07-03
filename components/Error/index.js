import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { styles } from './styles';
import './styles.css';

const DetailTitle = ({ msg, classes, history }) => (
  <Paper classes={{ root: classes.root }}>
    <Typography className={classes.errorBox} variant='subtitle1' color='error' align='center'>
      {JSON.stringify(msg) || 'Unknown Error'}
    </Typography>
    <Button className={classes.button} onClick={() => history.goBack()}>Go Back</Button>
  </Paper>
);

DetailTitle.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  msg: PropTypes.object,
};

DetailTitle.defaultProps = {
  msg: {},
};

export default withStyles(styles)(DetailTitle);
