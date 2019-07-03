import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContainer from './components/TabContainer';
import Properties from './components/Properties';
import LifeCycle from './components/LifeCycle';
import Other from './components/Other';
import Parts from './components/Parts';
import Software from './components/Software';
import Services from './components/Services';

import { styles } from './styles';
import './styles.css';

class DeviceTabs extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    device: PropTypes.object.isRequired,
  }

  state = {
    tabIndex: 'properties',
  }

  componentWillMount() {
    const { device } = this.props;
    this.tabs = {
      properties: <Properties device={device} />,
      lifecycle: <LifeCycle device={device} />,
      other: <Other device={device} />,
      parts: <Parts device={device} />,
      software: <Software device={device} />,
      services: <Services device={device} />,
    };
  }

  handleChange = (event, tabIndex) => {
    this.setState({ tabIndex });
  }

  render() {
    const { classes, device } = this.props;
    const { tabIndex } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position='static' color='default'>
          <Tabs
            value={tabIndex}
            onChange={this.handleChange}
            indicatorColor='primary'
            textColor='primary'
            variant='fullWidth'
          >
            <Tab classes={{ root: classes.tab }} value='properties' label='properties' />
            <Tab classes={{ root: classes.tab }} value='lifecycle' label='lifecycle' />
            <Tab classes={{ root: classes.tab }} value='other' label='other' />
            <Tab classes={{ root: classes.tab }} value='parts' label='parts' />
            <Tab classes={{ root: classes.tab }} value='software' label='software' />
            <Tab classes={{ root: classes.tab }} value='services' label='services' />
          </Tabs>
        </AppBar>
        {
          device.device_pk && (
            <TabContainer>
              {this.tabs[tabIndex]}
            </TabContainer>
          )
        }
      </div>
    );
  }
}

export default withStyles(styles)(DeviceTabs);
