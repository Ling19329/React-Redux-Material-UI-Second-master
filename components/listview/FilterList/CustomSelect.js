import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default class FilterSelect extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.InputLabelRef = React.createRef();
  // }

  state = {
    val: '',
    labelWidth: 0,
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-find-dom-node
    this.setState({ labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth });
  }

  onSelect = (e) => {
    const { addFilters, item } = this.props;
    addFilters({ field: item.field.search('_fk') !== -1 ? `${item.field}_name` : item.field, value: e.target.value });
    // this.setState({ val: e.target.value });
  }

  render() {
    const { classes, item, filter } = this.props;
    const { val, labelWidth } = this.state;
    const selected = filter ? `${filter.value}_value` : val;
    return (
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel
          classes={{
            root: classes.inputLabel,
          }}
          htmlFor='outlined-action'
          ref={(ref) => {
            this.InputLabelRef = ref;
          }}
        >
          {item.label}
        </InputLabel>
        <Select
          value={selected}
          onChange={this.onSelect}
          classes={{
            select: classes.input,
          }}
          input={(
            <OutlinedInput
              labelWidth={labelWidth}
              name='action'
              id='outlined-action'
            />
          )}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {
            item.unique.map((option, index) => {
              if (typeof option === 'undefined' || option === null) {
                return null;
              }

              let optionLabel = option;
              if (typeof option === 'boolean') {
                optionLabel = option ? 'Yes' : 'No';
              }

              return <MenuItem value={`${option}_value`} key={index}>{optionLabel}</MenuItem>;
            })
          }
        </Select>
      </FormControl>
    );
  }
}

FilterSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  addFilters: PropTypes.func.isRequired,
  filter: PropTypes.object,
};

FilterSelect.defaultProps = {
  filter: null,
};
