import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';

import { styles } from './styles';
import './styles.css';

class DetailTitle extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    type: PropTypes.string,
    name: PropTypes.string,
    viewName: PropTypes.string,
  }

  static defaultProps = {
    type: '',
    name: '',
    viewName: '',
  }

  onClick = () => { }

  render() {
    const {
      classes,
      type,
      name,
      viewName,
    } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.titleContainer}>
          <Typography variant='h5' className={classes.title}>{`view ${type} ${viewName} - `}</Typography>
          <Typography variant='h5'>{name}</Typography>
        </div>
        <div>
          <Button variant='outlined' className={classes.button}>
            Eidt
          </Button>
          <Button variant='outlined' className={classes.button}>
            History (Audit Logs)
          </Button>
          <Button variant='outlined' className={classNames(classes.button, classes.moreBtn)}>
            <Icon classes={{ root: classes.icon }}>more_horiz</Icon>
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DetailTitle);
