import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { routes, ROUTE_LOGIN } from 'routes';
import withWidth from '@material-ui/core/withWidth';
import history from 'store/history';
import AppBar from 'components/AppBar';
import Loading from 'components/Loading';
import { browserFlagsDefault, calculateBrowserFlags } from 'utils/browser';

class App extends Component {
  static propTypes = {
    width: PropTypes.string.isRequired,
    sessionChecked: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
  }

  state = {
    browser: browserFlagsDefault,
  };

  componentDidMount() {
    this.setBrowserFlags();
  }

  componentDidUpdate({ width: prevWidth }) {
    const {
      width,
    } = this.props;

    if (width !== prevWidth) {
      this.setBrowserFlags();
    }
  }

  /**
   * @name setBrowserFlags
   * Updates browser flags depending on the with of the user browser.
   */
  setBrowserFlags = () => {
    const { width } = this.props;

    const browser = calculateBrowserFlags(width);

    this.setState({
      browser,
    });
  }

  render() {
    const {
      sessionChecked,
      isAuthenticated,
      loading,
      // router,
    } = this.props;

    const {
      browser,
    } = this.state;

    return (
      <React.Fragment>
        <Loading hide={!loading} />

        <ConnectedRouter history={history}>
          <Switch>
            {
              sessionChecked && routes.map((route, index) => {
                const component = (route.ignoreSession || isAuthenticated)
                  ? (
                    <div>
                      {isAuthenticated && <AppBar />}
                      <route.component route={history} browser={browser} />
                    </div>
                  )
                  : (
                    <Redirect to={{
                      pathname: ROUTE_LOGIN,
                      state: { from: window.location.pathname },
                    }}
                    />
                  );

                const props = {
                  key: index,
                  path: route.path,
                  exact: route.exact,
                  render: () => component,
                };

                return <Route {...props} />;
              })
            }
          </Switch>
        </ConnectedRouter>
      </React.Fragment>
    );
  }
}

export default withWidth()(App);
