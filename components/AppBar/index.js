import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Icon from '@material-ui/core/Icon';

import MenuListComposition from 'components/Menu';
import Breadcrumb, { BreadcrumbItem } from 'components/Breadcrumb';
import LanguageSelector from 'components/LanguageSelector';
import NavLogo from 'assets/images/nav_logo.png';
import { ROUTE_MAIN_PAGE, ROUTE_LIST_BASEROUTE, ROUTE_LOGIN } from 'routes';
import { menuItems } from 'constants/config';
import { styles } from './styles';
import './styles.css';

let items = [];
const getAllItems = (arr) => {
  arr.map((i) => {
    if (i.children) {
      items = items.concat(i.children);
      getAllItems(i.children);
    }
  });
  return items;
};

const MenuBar = withStyles(styles)(({ classes, match }) => {
  const { params, path } = match;
  const type = params.type;
  const id = params.id;
  const allItems = getAllItems(menuItems);
  let selectedMenu = null;

  if (ROUTE_LIST_BASEROUTE !== path && ROUTE_MAIN_PAGE !== path && ROUTE_LOGIN !== path) {
    let tb = params.name;
    if (!tb) {
      tb = path.split('/')[1].replace('_detail', '');
    }
    selectedMenu = allItems.find(m => m.id === tb);
  }

  const lableWithType = allItems.find(m => m.id === type);

  return (
    <div className='AppBar'>
      <AppBar position='static'>
        <Toolbar
          variant='dense'
          classes={{
            root: classes.tooBarRoot,
          }}
        >
          <img className='AppBar__nav--logo' src={NavLogo} alt='DEVICE42' />
          <IconButton component={Link} to={ROUTE_MAIN_PAGE} aria-haspopup='true' color='inherit'>
            <Icon color='primary'>home</Icon>
          </IconButton>
          {
            menuItems.map((item, index) => <MenuListComposition item={item} key={index} />)
          }
        </Toolbar>
        <LanguageSelector />
      </AppBar>

      <Paper className={classes.paper}>
        <Breadcrumb
          separator={<NavigateNextIcon className={classes.separator} />}
        >
          <BreadcrumbItem to={ROUTE_MAIN_PAGE} label='Home' />
          {
            selectedMenu && <BreadcrumbItem label={selectedMenu.label} to={selectedMenu.to} active={!type && !id} />
          }
          {
            lableWithType && type && <BreadcrumbItem label={lableWithType.label} to={lableWithType.to} active />
          }
          {
            selectedMenu && id && <BreadcrumbItem label={id} to={selectedMenu.to} active />
          }
        </Breadcrumb>
      </Paper>
    </div>
  );
});

export default withRouter(MenuBar);
