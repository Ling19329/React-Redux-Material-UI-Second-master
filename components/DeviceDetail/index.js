import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import FormRow from 'components/FormRow';
import FormField from 'components/FormField';

import { styles } from './styles';
import './styles.css';

class DeviceDetail extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    device: PropTypes.object,
  }

  static defaultProps = {
    device: {},
  }

  onClick = () => { }

  render() {
    const { classes, device } = this.props;

    return (
      <List component='div' className={classes.root}>
        <FormRow>
          <FormField data={{ label: 'name', value: device.name, type: 'string' }} />
        </FormRow>
        <FormRow>
          <FormField data={{ label: 'network device', value: device.network_device, type: 'bool' }} />
          <FormField data={{ label: 'blade chassis', value: device.blade_chassis, type: 'bool' }} />
          <FormField data={{ label: 'virtual host', value: device.virtual_host, type: 'bool' }} />
          <FormField data={{ label: 'in service', value: device.in_service, type: 'bool' }} />
          <FormField data={{
            label: 'service level',
            value: device.service_level,
            type: 'link',
            link: 'service_level',
            linkId: device.service_level_id,
          }}
          />
          <FormField data={{
            label: 'is monitoring enabled',
            value:
              device.monitoring_enabled,
            type: 'string',
          }}
          />
        </FormRow>
        <FormRow>
          <FormField data={{ label: 'device cluster' }} />
        </FormRow>
        <FormRow>
          <FormField data={{
            label: 'hardware',
            value: device.hardware_name,
            type: 'link',
            link: 'hardware_detail',
            linkId: device.hardware_fk,
          }}
          />
          <FormField data={{ label: 'serial #', value: device.serial_no }} />
          <FormField data={{ label: 'UUID', value: device.uuid }} />
        </FormRow>
        <FormRow>
          <FormField data={{
            label: 'customer',
            value: device.customer_name,
            type: 'link',
            link: 'customer_detail',
            linkId: device.customer_fk,
          }}
          />
        </FormRow>
        <FormRow>
          <FormField data={{
            label: 'category',
            value: device.objectcategory_name,
            type: 'link',
            link: 'objectcategory',
            linkId: device.objectcategory_fk,
          }}
          />
        </FormRow>
        <FormRow>
          <FormField data={{ label: 'asset #', value: device.asset_no }} />
          <FormField data={{ label: 'location', value: device.building_pk ? device.device_location : '' }} />
        </FormRow>
        <FormRow>
          <FormField data={{
            label: 'storage room',
            value: device.storage_room_fk ? device.storage_room : '',
            type: 'link',
            link: 'room_detail',
            linkId: device.storage_room_fk,
          }}
          />
        </FormRow>
        <FormRow>
          <FormField data={{ label: 'Tags', value: device.first_added, type: 'date' }} />
          <FormField data={{ label: 'last updated', value: device.last_changed, type: 'date' }} />
        </FormRow>
        <FormRow>
          <FormField data={{ label: 'tags', value: device.tags }} />
        </FormRow>
        <FormRow>
          <FormField data={{ label: 'notes', value: device.notes }} />
        </FormRow>
      </List>
    );
  }
}

export default withStyles(styles)(DeviceDetail);
