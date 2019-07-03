export const deviceOneQuery = id => `select vd.device_pk, vd.name, vd.network_device, vd.blade_chassis, vd.virtual_host, vd.in_service, vd.service_level_id, vd.monitoring_enabled, vh.name as hardware_name, vd.hardware_fk, vc.name as customer_name, vd.customer_fk, vo.name as objectcategory_name, vd.objectcategory_fk, vb.building_pk, concat(vr.name,' @ ', vb.name) as device_location, concat(vrr.name,' @ ', vbb.name) as storage_room, vd.storage_room_fk from view_device_v1 vd left join view_hardware_v1 vh on vh.hardware_pk = vd.hardware_fk left join view_customer_v1 vc on vc.customer_pk = vd.customer_fk left join view_objectcategory_v1 vo on vo.objectcategory_pk = vd.objectcategory_fk left join view_room_v1 vr on vr.room_pk = vd.calculated_room_fk left join view_building_v1 vb on vr.building_fk = vb.building_pk left join view_room_v1 vrr on vrr.room_pk = vd.storage_room_fk left join view_building_v1 vbb on vrr.building_fk = vbb.building_pk where device_pk = ${id}`;

export const cpuMemoryHardDisk = {
  title: 'CPU memory HardDisk',
  header: [
    {
      field: 'cpucount',
      label: 'Total CPUs',
    },
    {
      field: 'cpucore',
      label: 'Cores/CPU',
    },
    {
      field: 'cpupower',
      label: 'CPU Speed',
    },
    {
      field: 'hz_id',
      label: null,
    },
    {
      field: 'hz',
      label: 'Hz',
    },
    {
      field: 'ram',
      label: 'RAM',
    },
    {
      field: 'ram_size_type_id',
      label: null,
    },
    {
      field: 'ram_size_type',
      label: 'MB/GB',
    },
    {
      field: 'hard_disk_count',
      label: 'HardDisk Count',
    },
    {
      field: 'hard_disk_size',
      label: 'HD size',
    },
    {
      field: 'hard_disk_size_type_id',
      label: null,
    },
    {
      field: 'hard_disk_size_type',
      label: 'GB/TB',
    },
    {
      field: 'hw_sw_raid_id',
      label: null,
    },
    {
      field: 'hw_sw_raid',
      label: 'HW/SW Raid',
    },
    {
      field: 'raid_type_id',
      label: null,
    },
    {
      field: 'raid_type',
      label: 'Raid Type',
    },
    {
      field: 'unknown', // TODO: need to find field for this
      label: "Don't change via api",
      type: 'bool',
    },
  ],
  query: pk => `select vd.cpucount, vd.cpucore, vd.cpupower, vd.hz_id, vd.hz, vd.ram, vd.ram_size_type_id, vd.ram_size_type,vd.hard_disk_size, vd.hard_disk_count, vd.hard_disk_size_type_id, vd.hard_disk_size_type, vd.hw_sw_raid_id, vd.hw_sw_raid, vd.raid_type_id, vd.raid_type from view_device_v1 vd where vd.device_pk = ${pk}`,
  related: 'cpuMemoryHardDisk',
};

export const osSystems = {
  title: 'Device Operating Systems',
  header: [
    {
      field: 'os_name',
      label: 'OS',
      type: 'link',
      link: 'os',
      linkField: 'os_fk',
    },
    {
      field: 'deviceos_fk',
      label: null,
    },
    {
      field: 'os_fk',
      label: null,
    },
    {
      field: 'os_version',
      label: 'OS Version',
    },
    {
      field: 'os_version_no',
      label: 'OS Version #',
    },
    {
      field: 'os_arch_id',
      label: null,
    },
    {
      field: 'os_arch',
      label: 'Architecture Type',
    },
    {
      field: 'os_license_key',
      label: 'OS License Key',
    },
    {
      field: 'unknown', // TODO: need to find field for this
      label: 'OS Support: Vendor - End date',
    },
    {
      field: 'discovered_license_key',
      label: null,
    },
    {
      field: 'os_support_expires',
      label: null,
    },
    {
      field: 'count_in_licensing',
      label: 'Count In Licensing',
      type: 'bool',
    },
    {
      field: 'unknown', // TODO: need to find field for this
      label: "Don't change via api",
      type: 'bool',
    },
    {
      field: 'unknown', // TODO: need to find field for this view_hardware_v1
      label: 'End of Life',
    },
    {
      field: 'unknown', // TODO: need to find field for this
      label: 'End of Support',
    },
    {
      field: 'os_first_added',
      label: null,
    },
    {
      field: 'os_last_edited',
      label: null,
    },
  ],
  query: pk => `select vd.os_name, vd.os_fk, vd.os_version, vd.os_version_no, vd.os_arch, vd.os_license_key, vd.discovered_license_key, vd.os_support_expires, vd.count_in_licensing, vd.os_first_added, vd.os_last_edited from view_device_v1 vd where device_pk = ${pk}`,
  related: 'osSystems',
};

export const rackInfo = {
  title: 'Rack Info',
  header: [
    {
      label: 'Rack',
      field: 'rack_fk',
      link: 'rack',
      linkField: 'rack_fk',
    },
    {
      label: 'Start at',
      field: 'start_at',
    },
    {
      label: null,
      field: 'start_at',
    },
    {
      label: 'Where',
      field: 'where',
    },
    {
      label: null,
      field: 'orientation_id',
    },
    {
      label: 'Orientation',
      field: 'orientation',
    },
    {
      label: 'Reversed',
      field: 'reversed',
    },
  ],
  query: pk => `select vd.rack_fk, vd.start_at, vd.where_id, vd.where, vd.orientation_id, vd.orientation, vd.reversed from view_device_v1 vd where vd.device_pk = ${pk}`,
  related: 'reackInfo',
};

export const connectivity = {
  title: 'Connectivity',
  header: [
    {
      label: 'HWAddress',
      field: 'hwaddress',
      type: 'link',
      link: 'netport',
      linkField: 'netport_pk',
    },
    {
      label: 'Port',
      field: 'port',
      type: 'link',
      link: 'netport',
      linkField: 'netport_pk',
    },
    {
      label: 'Primary VLAN',
      field: 'normalized_port',
    },
    {
      label: 'VLANs',
      field: 'normalized_port',
    },
    {
      label: 'Connections',
      field: '',
    },
  ],
  query: pk => `select * from view_netport_v1 where device_fk = ${pk} or second_device_fk = ${pk}`,
  related: 'connectivity',
};

export const ipAddress = {
  title: 'IP Address',
  header: [
    {
      label: 'IP Address',
      field: 'ip_address',
      type: 'link',
      link: 'ip_address',
      linkField: 'ipaddress_pk',
    },
    {
      label: 'Label',
      field: 'label',
    },
    {
      label: 'Type',
      field: 'type',
    },
    {
      label: 'Subnet',
      field: '',
      type: 'link',
      link: 'vlan',
      linkField: 'subnet_fk',
    },
    {
      label: 'Port',
      field: '',
    },
  ],
  query: pk => `select ip.ipaddress_pk, ip.ip_address, ip.label, ip.type, ip.type_id, net.port, sb.subnet_pk, concat(sb.network, '/', sb.mask_bits, '(', vr.name, ')' ) AS network from view_ipaddress_v1 ip left join view_subnet_v1 sb on ip.subnet_fk = sb.subnet_pk left join view_vrfgroup_v1 vr on sb.vrfgroup_fk = vr.vrfgroup_pk left join view_netport_v1 net on net.device_fk = ip.device_fk or net.second_device_fk = ip.device_fk where ip.device_fk = ${pk}`,
  related: 'ipAddress',
};

export const deviceAlias = {
  title: 'Device Alias',
  header: [
    {
      label: 'Alias',
      field: 'alias_name',
    },
    {
      label: null,
      field: 'devicealias_pk',
    },
  ],
  query: pk => `select devicealias_pk, alias_name from view_devicealias_v1 where device_fk = ${pk}`,
  related: 'deviveAlias',
};

export const deviceNonAuth = {
  title: 'Device Non-Authoritative Alias',
  header: [
    {
      label: 'Non-Authoritative Alias',
      field: 'alias_name',
    },
  ],
  query: pk => `select devicenonauthoritativealias_pk, alias_name from view_devicenonauthoritativealias_v1 where device_fk = ${pk}`,
  related: 'deviceNonAuth',
};

export const assetLifeCycle = {
  title: 'Asset lifecycle',
  header: [
    {
      label: 'Date',
      field: 'assetlifecycle_pk',
      type: 'date',
    },
    {
      label: 'Event',
      field: 'action_name',
      type: 'link',
      link: 'asset_action',
      linkField: 'assetaction_pk',
    },
    {
      label: 'End User',
      field: 'enduser_name',
      type: 'link',
      link: 'end_users',
      linkField: 'enduser_pk',
    },
    {
      label: 'Notes',
      field: 'notes',
    },
  ],
  query: pk => `select asset_life.date, asset_life.notes, asset_action.assetaction_pk, asset_action.name as action_name, enduser.enduser_pk, enduser.name as enduser_name from view_assetlifecycle_v1 asset_life left join view_assetaction_v1 asset_action on asset_life.assetaction_fk = asset_action.assetaction_pk left join view_enduser_v1 enduser on asset_life.enduser_fk = enduser.enduser_pk where asset_life.assetlifecycle_pk = ${pk}`,
  related: 'assetLifeCycle',
};

export const assetProductCode = {
  title: 'Asset QR/Barcode',
  header: [
    {
      label: 'QR Profile',
      field: '',
      type: 'link',
      linke: '',
      linkField: '',
    },
    {
      label: 'QR/Barcode',
      field: '',
      type: 'link',
      linke: '',
      linkField: '',
    },
  ],
  query: () => null, // TODO need a query for Lifecyle/Asset QR in device view page ,passed device_pk
  related: 'assetProductCode',
};

export const purchaseSupport = {
  title: 'Purchase/Support Info',
  header: [
    {
      label: 'Order #',
      field: '',
      type: 'link',
      link: 'purchase',
      linkField: '',
    },
    {
      label: 'Vendor',
      field: '',
    },
    {
      label: 'Cost',
      field: '',
    },
    {
      label: 'Contract Type',
      field: '',
    },
    {
      label: 'Service Type',
      field: '',
    },
    {
      label: 'Contract ID',
      field: '',
    },
    {
      label: 'Start Date',
      field: '',
    },
    {
      label: 'End Date',
      field: '',
    },
  ],
  query: pk => `select pd.device_fk, pd.device_name, pl.cost, pl.purchaselineitem_pk, pl.contract_type_id, pl.contract_type_name, pl.service_type_id, pl.service_type_name, pl.contract_id, pl.start_date, pl.end_date, p.purchase_pk, p.order_no, v.vendor_pk, v.name from view_purchaselineitems_to_devices_v1 pd left join view_purchaselineitem_v1 pl on pd.purchaselineitem_fk = pl.purchaselineitem_pk left join view_purchase_v1 p on pl.purchase_fk = p.purchase_pk left join view_vendor_v1 v on p.vendor_fk = v.vendor_pk where pd.device_fk = ${pk}`,
  related: 'purchaseSupport',
};

export const deviceURL = {
  title: 'Device URLs',
  header: [
    {
      label: ' ',
      field: '',
      type: 'link',
      link: '',
      linkField: '',
    },
    {
      label: 'Type',
      field: '',
      type: 'link',
      link: '',
      linkField: '',
    },
    {
      label: 'Host',
      field: '',
    },
    {
      label: 'Port',
      field: '',
    },
    {
      label: 'URL suffix',
      field: '',
    },
    {
      label: 'Notes',
      field: '',
    },
  ],
  query: () => '',
  related: 'deviceUrl',
};

export const powerUnitPorts = {
  title: 'Power Unit Ports',
  header: [
    {
      label: 'Port Type',
      field: '',
    },
    {
      label: 'Power Unit',
      field: '',
    },
    {
      label: 'Port Number',
      field: '',
    },
    {
      label: 'Override Watts',
      field: '',
    },
    {
      label: 'Object PSU label',
      field: '',
    },
    {
      label: 'Bootstrap Power',
      field: '',
    },
    {
      label: 'Power Draw',
      field: '',
    },
    {
      label: 'Active Power',
      field: '',
    },
    {
      label: 'Apparent Power',
      field: '',
    },
    {
      label: 'Apparent Power',
      field: 'Power Factor',
    },
  ],
  query: () => '',
  related: 'powerUnitPorts',
};

export const BIOSInfo = {
  title: 'BIOS Info',
  header: [
    {
      label: 'Vendor',
      field: '',
      type: 'link',
      link: '',
      linkField: '',
    },
    {
      label: 'Version',
      field: '',
    },
    {
      label: 'Revision',
      field: '',
    },
    {
      label: 'Release Date',
      field: '',
    },
    {
      label: 'Firmware Revision',
      field: '',
    },
  ],
  query: () => '',
  related: 'BIOSInfo',
};

export const customFields = {
  title: 'Custom Fields',
  header: [
    {
      label: 'Field',
      field: '',
    },
    {
      label: 'Value',
      field: '',
    },
    {
      label: 'Notes',
      field: '',
    },
  ],
  query: () => '',
  related: 'customFields',
};

export const fileAttachments = {
  title: 'File Attachments',
  header: [
    {
      label: 'Uploaded file',
      field: '',
    },
    {
      label: 'Description',
      field: '',
    },
    {
      label: 'Link',
      field: '',
    },
  ],
  query: () => '',
  related: 'fileAttachments',
};

export const deviceExtendedData = {
  title: 'Device Extended Data',
  header: [
    {
      label: 'Data Center',
      field: '',
    },
    {
      label: 'VM Manager',
      field: '',
      type: 'link',
      link: '',
      linkField: '',
    },
  ],
  query: () => '',
  related: 'deviceExtendedData',
};

export const discoveryQuality = {
  title: 'Discovery Quality',
  header: [
    {
      label: 'Discovery Type',
      field: '',
    },
    {
      label: 'Discovery Job',
      field: '',
    },
    {
      label: 'IP',
      field: '',
    },
    {
      label: 'Port Check',
      field: '',
    },
    {
      label: 'Authorization',
      field: '',
    },
    {
      label: 'Discovery Errors',
      field: '',
    },
    {
      label: 'New Issues',
      field: '',
    },
    {
      label: 'Last Run',
      field: '',
    },
  ],
  query: () => null,
  related: 'discoveryQuality',
};

export const parts = {
  title: 'Parts',
  header: [
    {
      label: 'Count',
      field: '',
    },
    {
      label: 'Part Model',
      field: '',
    },
    {
      label: 'Model #',
      field: '',
    },
    {
      label: 'Slot',
      field: '',
    },
    {
      label: 'Serial #',
      field: '',
    },
    {
      label: 'Asset #',
      field: '',
    },
    {
      label: 'Firmware Version',
      field: '',
    },
    {
      label: 'Assignment',
      field: '',
    },
    {
      label: 'Location',
      field: '',
    },
    {
      label: 'Raid Type',
      field: '',
    },
    {
      label: 'Raid Group',
      field: '',
    },
    {
      label: 'Description',
      field: '',
    },
    {
      label: 'Date Changed',
      field: '',
    },
    {
      label: 'First added',
      field: '',
      type: 'date',
    },
    {
      label: 'Last updated',
      field: '',
      type: 'date',
    },
  ],
  query: () => '',
  related: 'parts',
};

export const softwareInUse = {
  title: 'Software In Use',
  header: [
    {
      label: 'Software',
      field: '',
    },
    {
      label: 'Version',
      field: '',
    },
    {
      label: 'First Detected',
      field: '',
    },
    {
      label: 'Last updated',
      field: '',
    },
  ],
  query: () => '',
  related: 'softwareInUse',
};

export const seviceDetail = {
  title: 'Service Detail',
  header: [
    {
      label: 'Name',
      field: '',
      type: 'link',
      link: '',
      linkField: '',
    },
    {
      label: 'First Detected',
      field: '',
      type: 'date',
    },
    {
      label: 'Last updated',
      field: '',
      type: 'date',
    },
    {
      label: 'Start Mode',
      field: '',
    },
    {
      label: 'State',
      field: '',
    },
    {
      label: 'User',
      field: '',
    },
  ],
  query: () => '',
  related: 'serviceDetails',
};
