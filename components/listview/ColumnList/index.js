import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import AddColumnList from 'components/AddColumnList';
import { styles } from './styles';
import './styles.css';

class ColumnList extends React.Component {
  state = {
    openAddColumnList: false,
    activated: 0,
  }

  componentWillMount() {
    const { columnLists, activated } = this.props;
    this.setState({ columnLists, activated });
  }

  componentWillReceiveProps(nextProps) {
    const { columnLists } = nextProps;
    this.setState({ columnLists });
  }

  toggleAddColumnList = open => () => {
    this.setState({ openAddColumnList: open });
  }

  handleItemClick = (index) => {
    const { activated } = this.state;
    if (activated !== index) {
      this.setState({ activated: index }, () => {
        const { changeColumnList } = this.props;
        if (changeColumnList) {
          changeColumnList(index);
        }
      });
    }
  }

  render() {
    const { classes, viewName } = this.props;
    const { columnLists, activated } = this.state;
    const { openAddColumnList } = this.state;
    return (
      <div className='ColumnsList'>
        <Paper classes={{ root: classes.paper }}>
          <Icon color='primary' className='ColumnList__Icon'>view_column</Icon>
          <Typography variant='subtitle1'>Column List</Typography>
          <Tooltip title='Add ColumList'>
            <Icon onClick={this.toggleAddColumnList(true)} className='ColumnList__Icon__Add'>playlist_add</Icon>
          </Tooltip>
        </Paper>
        <List component='div' classes={{ root: classes.list }}>
          <Divider />
          <ListItem
            onClick={() => this.handleItemClick(0)}
            selected={activated === 0}
            classes={{ root: classes.listItem }}
            button
          >
            <ListItemText>
              System Column List
            </ListItemText>
          </ListItem>
          {
            columnLists.map((list, index) => {
              return (
                <ListItem
                  onClick={() => this.handleItemClick(index + 1)}
                  selected={activated === index + 1}
                  classes={{ root: classes.listItem }}
                  key={index}
                  button
                >
                  <ListItemText>
                    {list.name}
                  </ListItemText>
                </ListItem>
              );
            })
          }
        </List>
        <AddColumnList table={viewName} open={openAddColumnList} onClose={this.toggleAddColumnList(false)} />
      </div>
    );
  }
}

ColumnList.propTypes = {
  columnLists: PropTypes.array,
  classes: PropTypes.object.isRequired,
  viewName: PropTypes.string.isRequired,
  changeColumnList: PropTypes.func.isRequired,
  activated: PropTypes.number,
};
ColumnList.defaultProps = {
  columnLists: [],
  activated: 0,
};

export default withStyles(styles)(ColumnList);
