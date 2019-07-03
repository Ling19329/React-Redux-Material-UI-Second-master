import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { transformValuByType } from 'utils/helpers';
import { styles } from './styles';
import './styles.css';

class FormField extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object,
  }

  static defaultProps = {
    data: {
      label: '',
      value: '',
      type: '',
    },
  }

  onClick = () => { }

  render() {
    const { classes, data } = this.props;
    return (
      <Typography component='div' className={classes.root}>
        <Typography component='span' className={classes.label}>{`${data.label}:`}</Typography>
        <Typography component='span' className={classes.label}>
          {transformValuByType(data.value, data.type, data.link, data.linkId)}
        </Typography>
      </Typography>
    );
  }
}

export default withStyles(styles)(FormField);
