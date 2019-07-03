import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

// import LoadingIndicator from 'components/LoadingIndicator';

import { styles } from './styles';
import './styles.css';

class DetailView extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  };

  componentWillMount() {
    const { match } = this.props;
    const { params, path } = match;
    const tb = path.split('/')[1].replace('_detail', '');
    this.setState({ id: params.id, tb });
  }

  render() {
    const {
      classes,
    } = this.props;
    const { id, tb } = this.state;
    return (
      <div className='DetailView'>
        <div className={classes.wrapper}>
          <h5>{`${tb} ---> ${id}`}</h5>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DetailView);
