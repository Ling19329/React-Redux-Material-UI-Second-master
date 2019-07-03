import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import LoadingIndicator from 'components/LoadingIndicator';

import { transformValuByType } from 'utils/helpers';
import { styles } from './styles';
import './styles.css';

class RelatedList extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    onFetch: PropTypes.func.isRequired,
    loaded: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    title: PropTypes.string,
    header: PropTypes.array,
    query: PropTypes.string,
    related: PropTypes.string,
  }

  static defaultProps = {
    header: [],
    title: '',
    query: null,
    related: null,
  }

  state = {
    loaded: false,
    rows: [],
  }

  componentWillMount() {
    const {
      query, related, onFetch, header,
    } = this.props;
    if (query && related && onFetch) {
      onFetch(query, related);
    }
    this.setState({ header });
  }

  componentWillReceiveProps(nextProps) {
    const { loaded, related, data } = nextProps;

    if (related) {
      this.setState({
        loaded: loaded[related],
        rows: data[related] || [],
      });
    }
  }

  render() {
    const {
      classes,
      title,
      related,
      query,
    } = this.props;

    const {
      header,
      rows,
      loaded,
    } = this.state;
    return (
      <Paper className={classes.root}>
        {
          related && !loaded && query && <LoadingIndicator size={40} />
        }
        <Typography classes={{ root: classes.title }} variant='subtitle1'>{title}</Typography>
        <Table>
          <TableHead>
            <TableRow classes={{ root: classes.row }}>
              {
                header.map((h, i) => (
                  h.label
                    ? <TableCell align='left' classes={{ root: classes.cell }} key={i}>{h.label}</TableCell>
                    : null
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              return (
                <TableRow key={index} classes={{ root: classes.row }}>
                  {
                    header.map((h, i) => (
                      h.label
                        ? (
                          <TableCell align='left' classes={{ root: classes.cell }} key={i}>
                            {
                              transformValuByType(row[h.field], h.type, h.link, row[h.linkField])
                            }
                          </TableCell>
                        )
                        : null
                    ))
                  }
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(RelatedList);
