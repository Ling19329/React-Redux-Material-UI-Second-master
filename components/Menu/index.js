import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import { styles } from './style';

class MenuListComposition extends React.Component {
  state = {
    open: false,
  };

  componentWillReceiveProps() {
    this.setState({ open: false });
  }

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = (event) => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes, item, subMenu } = this.props;
    const { open } = this.state;
    const hasChildren = item.children ? item.children.length > 0 : false;
    return (
      <div className={subMenu ? classes.subMenu : classes.root}>
        {
          subMenu
            ? (
              <MenuItem
                buttonRef={(node) => { this.anchorEl = node; }}
                aria-owns={open ? 'menu-list-grow' : undefined}
                onClick={this.handleToggle}
                aria-haspopup='true'
                classes={{ root: classes.menuItem }}
              >
                {item.label}
                <PlayArrowIcon className={classes.moreIcon} />
              </MenuItem>
            )
            : (
              <Button
                buttonRef={(node) => { this.anchorEl = node; }}
                aria-owns={open ? 'menu-list-grow' : undefined}
                component={item.to ? Link : 'button'}
                onClick={this.handleToggle}
                to={item.to}
                fullWidth
                aria-haspopup='true'
              >
                {item.label}
              </Button>
            )
        }

        <Popper className={classes.popper} open={open} anchorEl={this.anchorEl} placement={subMenu ? 'right-start' : 'bottom-start'} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id='menu-list-grow'
              style={{ transformOrigin: placement === 'bottom-start' ? 'center top' : 'center left' }}
            >
              <Paper classes={{ root: hasChildren && classes.paper }}>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList classes={{ root: classes.menuList }}>
                    {
                      hasChildren && item.children.map((menu, index) => {
                        if (!menu.children && menu.to) {
                          return (
                            <Link key={index} to={menu.to}>
                              <MenuItem classes={{ root: classes.menuItem }}>
                                {menu.label}
                              </MenuItem>
                            </Link>
                          );
                        }
                        if (menu.children) {
                          return (<MenuListComposition subMenu classes={classes} key={index} item={menu} />);
                        }
                        return (
                          <MenuItem key={index} classes={{ root: classes.menuItem }}>
                            {menu.label}
                          </MenuItem>
                        );
                      })
                    }
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  subMenu: PropTypes.bool,
};

MenuListComposition.defaultProps = {
  subMenu: false,
};

export default withStyles(styles)(MenuListComposition);
