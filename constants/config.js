/**
 * label: string,
 * field: string,
 * namefield: string          : column name, each field must split with whitespace,
 * combine_symbol: string     : if namefield is multiple, can be define combin symbol. default symbole is ",".
 * has_link: boolean          : if cell should be link field, has_link must true.
 * to: 'part',                : if has_link is true, 'to' used for a router
 * link_id_field: 'part_pk',  : if has_link is true, 'link_id_field' is item id
 * no_link: boolean           : name is link field by default, but if it don't need, no_link must true
 * type: string               : 'type' field can be define cell value type such as string, date, link, number
 * condition_field: string    : if field has '_fk', can be define special condition field for join statement of sql
 */

// Data center
const BUILDING = 'building';
const ROOM = 'room';
const RACK = 'rack';
const PDU = 'pdu';
const PDUMODEL = 'pdumodel';
const VENDOR = 'vendor';
const HARDWARE = 'hardware';
const PARTMODEL = 'partmodel';
const PART = 'part';
const CUSTOMER = 'customer';
const ENDUSER = 'enduser';
const PURCHASE = 'purchase';
const CABLE = 'cable';
const TELCOCIR = 'telcocircuit';
const POWERCIR = 'powercircuit'; // TODO need to find database table for this.
const DEVICE_SER_PROFILE = 'device_service_profile'; // TODO need to find database table for this.
const OBJECTCATEGORIES = 'objectcategory';
const TAG = 'taggeditem';
const PASSWORD = 'password';
// Device
const DEVICE = 'device';
const PHYSICAL = 'physical';
const VIRTUAL = 'virtual';
const BLADE = 'blade';
const CLUSTER = 'cluster';
const UNKNOWM = 'unknown';
const OTHER = 'other';
const ASSET = 'asset';
const PATCHPANELMODEL = 'patchpanelmodel';
const PATCHPANELMODULEMODEL = 'patchpanelmodulemodel';
const TAPMODULEMODEL = 'portsintapmodulemodel';
// Network
const IPADDRESS = 'ipaddress';
const VLAN = 'vlan';
const VRF = 'vrfgroup';
const SUBNET = 'subnet';
const NETPORT = 'netport';
const DNSZONE = 'dnszone';
const DNSRECORDS = 'dnsrecords';

// Software
const SOFTWARE_LICENSE_MODEL = 'softwarelicensemodel';
const SOFTWARE = 'software';
const SOFTWARE_IN_USE = 'softwareinuse';
const SOFTWARE_EOL_EOS = 'softwareeoleos';
const SERVICE = 'service';
const SERVICE_INSTANCE = 'serviceinstance';
const SERVICE_SCHEDULE = 'serviceschedule';
const SERVICE_PORT = 'serviceport';
const SERVICE_PORT_REMOTE_IP = 'serviceportremoteip';
const NETWORK_SHARE = 'networkshare';
const APP_COMP = 'appcomp';

const OS = 'os';
const OS_IN_USE = 'deviceos';
const OS_EOL_EOS = 'oseoleos';
const CERTIFICATE = 'certificate';
const DEVICE_CERTIFICATE = 'devicecertificate';

const LIST_BASEROUTE = '/list';

export const menuItems = [
  {
    label: 'DataCenter',
    to: '',
    children: [
      {
        label: 'Buildings',
        to: `${LIST_BASEROUTE}/${BUILDING}`,
        id: BUILDING,
      },
      {
        label: 'Rooms',
        to: `${LIST_BASEROUTE}/${ROOM}`,
        id: ROOM,
      },
      {
        label: 'Racks',
        to: `${LIST_BASEROUTE}/${RACK}`,
        id: RACK,
      },
      {
        label: 'Power Units',
        to: '',
        children: [
          {
            label: 'Power Units',
            to: `${LIST_BASEROUTE}/${PDU}`,
            id: PDU,
          },
          {
            label: 'Power Unit Models',
            to: `${LIST_BASEROUTE}/${PDUMODEL}`,
            id: PDUMODEL,
          },
        ],
      },
      {
        label: 'Vendors',
        to: `${LIST_BASEROUTE}/${VENDOR}`,
        id: VENDOR,
      },
      {
        label: 'Hardware models',
        to: `${LIST_BASEROUTE}/${HARDWARE}`,
        id: HARDWARE,
      },
      {
        label: 'Parts',
        to: '',
        children: [
          {
            label: 'Model List',
            to: `${LIST_BASEROUTE}/${PARTMODEL}`,
            id: PARTMODEL,
          },
          {
            label: 'Parts List',
            to: `${LIST_BASEROUTE}/${PART}`,
            id: PART,
          },
        ],
      },
      {
        label: 'Customers/departments',
        to: `${LIST_BASEROUTE}/${CUSTOMER}`,
        id: CUSTOMER,
      },
      {
        label: 'End users',
        to: `${LIST_BASEROUTE}/${ENDUSER}`,
        id: ENDUSER,
      },
      {
        label: 'Purchases',
        to: `${LIST_BASEROUTE}/${PURCHASE}`,
        id: PURCHASE,
      },
      {
        label: 'Cables',
        to: `${LIST_BASEROUTE}/${TELCOCIR}`,
        id: TELCOCIR,
      },
      {
        label: 'Telco circuits',
        to: `${LIST_BASEROUTE}/${TELCOCIR}`,
        id: TELCOCIR,
      },
      {
        label: 'Power circuits',
        to: `${LIST_BASEROUTE}/${POWERCIR}`,
        id: POWERCIR,
      },
      {
        label: 'UCS Service Profiles',
        to: `${LIST_BASEROUTE}/${DEVICE_SER_PROFILE}`,
        id: DEVICE_SER_PROFILE,
      },
      {
        label: 'Object Categories',
        to: `${LIST_BASEROUTE}/${OBJECTCATEGORIES}`,
        id: OBJECTCATEGORIES,
      },
      {
        label: 'Building Hierarchy',
        to: '/devicetree',
      },
      {
        label: 'Tags',
        to: `${LIST_BASEROUTE}/${TAG}`,
        id: TAG,
      },
    ],
  },
  {
    label: 'Devices',
    to: '',
    children: [
      {
        label: 'All Devices',
        to: `${LIST_BASEROUTE}/${DEVICE}`,
        id: DEVICE,
      },
      {
        label: 'Physical Devices',
        to: `${LIST_BASEROUTE}/${DEVICE}/${PHYSICAL}`,
        id: PHYSICAL,
      },
      {
        label: 'Virtual Devices',
        to: `${LIST_BASEROUTE}/${DEVICE}/${VIRTUAL}`,
        id: VIRTUAL,
      },
      {
        label: 'Blade Devices',
        to: `${LIST_BASEROUTE}/${DEVICE}/${BLADE}`,
        id: BLADE,
      },
      {
        label: 'Cluster Devices',
        to: `${LIST_BASEROUTE}/${DEVICE}/${CLUSTER}`,
        id: CLUSTER,
      },
      {
        label: 'Unknown Devices',
        to: `${LIST_BASEROUTE}/${DEVICE}/${UNKNOWM}`,
        id: UNKNOWM,
      },
      {
        label: 'Other Devices',
        to: `${LIST_BASEROUTE}/${DEVICE}/${OTHER}`,
        id: OTHER,
      },
      {
        label: 'Assets',
        to: '',
        children: [
          {
            label: 'Assets',
            to: `${LIST_BASEROUTE}/${ASSET}`,
            id: ASSET,
          },
          {
            label: 'Racked Asset Templates',
            to: '',
          },
          {
            label: 'Patch Panel Models',
            to: `${LIST_BASEROUTE}/${PATCHPANELMODEL}`,
            id: PATCHPANELMODEL,
          },
          {
            label: 'Patch Panel Module Models',
            to: `${LIST_BASEROUTE}/${PATCHPANELMODULEMODEL}`,
            id: PATCHPANELMODULEMODEL,
          },
          {
            label: 'TAP Model Models',
            to: `${LIST_BASEROUTE}/${TAPMODULEMODEL}`,
            id: TAPMODULEMODEL,
          },
        ],
      },
      {
        label: 'Mobile View',
        to: '',
        children: [
          {
            label: 'Asset',
            to: '',
          },
          {
            label: 'Device',
            to: '',
          },
          {
            label: 'Rack',
            to: '',
          },
        ],
      },
    ],
  },
  {
    label: 'Network',
    to: '',
    children: [
      {
        label: 'IP Addresses',
        to: `${LIST_BASEROUTE}/${IPADDRESS}`,
        id: IPADDRESS,
      },
      {
        label: 'VLAN',
        to: `${LIST_BASEROUTE}/${VLAN}`,
        id: VLAN,
      },
      {
        label: 'VRF Group',
        to: `${LIST_BASEROUTE}/${VRF}`,
        id: VRF,
      },
      {
        label: 'Subnet Categories',
        to: '',
      },
      {
        label: 'Subnet',
        to: `${LIST_BASEROUTE}/${SUBNET}`,
        id: SUBNET,
      },
      {
        label: 'Subnet Tree',
        to: '',
      },
      {
        label: 'Ports',
        to: `${LIST_BASEROUTE}/${NETPORT}`,
        id: NETPORT,
      },
      {
        label: 'DNS Zones',
        to: `${LIST_BASEROUTE}/${DNSZONE}`,
        id: DNSZONE,
      },
      {
        label: 'DNS Records',
        to: `${LIST_BASEROUTE}/${DNSRECORDS}`,
        id: DNSRECORDS,
      },
      {
        label: 'IP NAT',
        to: '',
      },
    ],
  },
  {
    label: 'Apps',
    to: '',
    children: [
      {
        label: 'Software',
        to: '',
        children: [
          {
            label: 'Software License Models',
            to: `${LIST_BASEROUTE}/${SOFTWARE_LICENSE_MODEL}`,
            id: SOFTWARE_LICENSE_MODEL,
          },
          {
            label: 'Software Components',
            to: `${LIST_BASEROUTE}/${SOFTWARE}`,
            id: SOFTWARE,
          },
          {
            label: 'Software In Use',
            to: `${LIST_BASEROUTE}/${SOFTWARE_IN_USE}`,
            id: SOFTWARE_IN_USE,
          },
          {
            label: 'EOL / EOS',
            to: `${LIST_BASEROUTE}/${SOFTWARE_EOL_EOS}`,
            id: SOFTWARE_EOL_EOS,
          },
        ],
      },
      {
        label: 'Services',
        to: '',
        children: [
          {
            label: 'Servies',
            to: `${LIST_BASEROUTE}/${SERVICE}`,
            id: SERVICE,
          },
          {
            label: 'Service Instances',
            to: `${LIST_BASEROUTE}/${SERVICE_INSTANCE}`,
            id: SERVICE_INSTANCE,
          },
          {
            label: 'Service Schedules',
            to: `${LIST_BASEROUTE}/${SERVICE_SCHEDULE}`,
            id: SERVICE_SCHEDULE,
          },
          {
            label: 'Service Ports',
            to: `${LIST_BASEROUTE}/${SERVICE_PORT}`,
            id: SERVICE_PORT,
          },
          {
            label: 'Client Service Port Statistics',
            to: `${LIST_BASEROUTE}/${SERVICE_PORT_REMOTE_IP}`,
            id: SERVICE_PORT_REMOTE_IP,
          },
          {
            label: 'Network Shares',
            to: `${LIST_BASEROUTE}/${NETWORK_SHARE}`,
            id: NETWORK_SHARE,
          },
        ],
      },
      {
        label: 'Application Components',
        to: `${LIST_BASEROUTE}/${APP_COMP}`,
        id: APP_COMP,
      },
      {
        label: 'Affinity Groups',
        to: '',
      },
      {
        label: 'Operating Systems',
        to: '',
        children: [
          {
            label: 'OS License Models',
            to: '',
          },
          {
            label: 'Operating Systems',
            to: `${LIST_BASEROUTE}/${OS}`,
            id: OS,
          },
          {
            label: 'Operating Systems In Use',
            to: `${LIST_BASEROUTE}/${OS_IN_USE}`,
            id: OS_IN_USE,
          },
          {
            label: 'EOL/EOS',
            to: `${LIST_BASEROUTE}/${OS_EOL_EOS}`,
            id: OS_EOL_EOS,
          },
        ],
      },
      {
        label: 'Certificates',
        to: '',
        children: [
          {
            label: 'Certificates',
            to: `${LIST_BASEROUTE}/${CERTIFICATE}`,
            id: CERTIFICATE,
          },
          {
            label: 'Certificate Instances',
            to: `${LIST_BASEROUTE}/${DEVICE_CERTIFICATE}`,
            id: DEVICE_CERTIFICATE,
          },
        ],
      },
    ],
  },
  {
    label: 'Secrets',
    to: `${LIST_BASEROUTE}/${PASSWORD}`,
    id: PASSWORD,
  },
  {
    label: 'Discovery',
    to: '',
    children: [],
  },
  {
    label: 'Reports',
    to: '',
    children: [],
  },
  {
    label: 'Tools',
    to: '',
  },
];

export const defaults = {
  [DEVICE]: {
    column: [
      {
        field: 'name',
        label: 'Name',
      },
      {
        field: 'type_id',
        label: null,
      },
      {
        field: 'type',
        label: 'Type',
      },
      {
        field: 'service_level_id',
        label: null,
      },
      {
        field: 'service_level',
        label: 'Service level',
      },
      {
        field: 'in_service',
        label: 'In Service',
      },
      {
        field: 'asset_no',
        label: 'Asset #',
      },
      {
        field: 'serial_no',
        label: 'Serial #',
      },
      {
        field: 'room_fk',
        label: 'Location',
      },
      {
        field: 'hardware_fk',
        label: 'Hardware',
      },
      {
        field: 'os_fk',
        label: 'OS',
      },
      {
        field: 'customer_fk',
        label: 'Customer',
      },
    ],
    query: '',
  },
  [ASSET]: {
    column: [
      {
        label: 'ID',
        field: 'asset_pk',
      },
      {
        label: 'Name',
        field: 'name',
      },
      {
        label: 'Service Level',
        field: 'service_level_name',
      },
      {
        label: 'Type',
        field: 'assettype_fk',
      },
      {
        label: 'Location',
        field: 'room_fk',
      },
      {
        label: 'Building',
        field: 'building_fk',
      },
      {
        label: 'Serial #',
        field: 'serial_no',
      },
      {
        label: 'Asset #',
        field: 'asset_no',
      },
      {
        label: 'Vendor',
        field: 'vendor_fk',
      },
      {
        label: 'Image',
      },
    ],
  },
  [PATCHPANELMODEL]: {
    column: [
      {
        label: 'Name',
        field: 'name',
      },
      {
        label: 'Type',
        field: 'type',
      },
      {
        label: 'Port Type',
        field: 'port_type_name',
      },
      {
        label: 'Manufacturer',
        field: 'vendor_fk',
      },
      {
        label: 'Image',
      },
      {
        label: 'Number of Ports',
        field: 'number_of_ports',
      },
    ],
  },
  [PATCHPANELMODULEMODEL]: {
    column: [
      {
        label: 'Name',
        field: 'name',
      },
      {
        label: 'Port Type',
        field: 'port_type_name',
      },
      {
        label: 'Number of ports',
        field: 'number_of_ports',
      },
    ],
  },
  [TAPMODULEMODEL]: {
    column: [
      {
        label: 'Name',
        field: 'model_name',
        has_link: true,
        to: TAPMODULEMODEL,
        link_id_field: 'model_id',
      },
      {
        field: 'label',
        label: 'Label',
      },
      {
        field: 'port_type_name',
        label: 'Port Type',
      },
      {
        field: 'single_strand',
        label: 'Singe  Strand',
      },
      {
        field: 'monitor_direction',
        label: 'Monitor Direction',
      },
    ],
  },
  [BUILDING]: {
    column: [
      {
        field: 'name',
        label: 'Name',
      },
      {
        field: 'address',
        label: 'Address',
      },
      {
        label: 'Image',
      },
      {
        field: 'contact_name',
        label: 'Contact Name',
      },
      {
        field: 'contact_phone',
        label: 'Contact Phone',
      },
      {
        field: 'notes',
        label: 'Notes',
      },
    ],
  },
  [ROOM]: {
    column: [
      {
        field: 'name',
        label: 'Name',
      },
      {
        label: 'Layout',
      },
      {
        field: 'building_fk',
        label: 'Building',
      },
      {
        label: 'Available Us ',
      },
      {
        field: 'notes',
        label: 'Notes',
      },
    ],
  },
  [VENDOR]: {
    column: [
      {
        field: 'name',
        label: 'Name',
      },
    ],
  },
  [RACK]: {
    column: [
      {
        field: 'name',
        label: 'Name',
      },
      {
        label: 'Layout',
      },
      {
        field: 'vendor_fk',
        label: 'Manufacturer',
      },
      {
        // TODO field: 'room_fk.building_fk.name',
        label: 'Room',
      },
      {
        label: '# Devies',
      },
      {
        label: 'Available Us',
      },
      {
        field: 'row',
        label: 'Row',
      },
      {
        field: 'size',
        label: 'Size',
      },
      {
        field: 'notes',
        label: 'Notes',
      },
      {
        label: 'Notes',
        field: 'notes',
      },
    ],
  },
  [PDU]: {
    column: [
      {
        field: 'name',
        label: 'Name',
      },
      {
        field: 'pdumodel_fk',
        label: 'Power Unit Model',
      },
      {
        field: 'type',
        label: 'Type',
      },
      {
        field: 'device_fk',
        namefield: 'serial_no',
        label: 'Serial #',
      },
    ],
  },
  [PDUMODEL]: {
    column: [
      {
        field: 'name',
        label: 'Name',
      },
      {
        field: 'type',
        label: 'Type',
      },
      {
        field: 'size',
        label: 'Size',
      },
      {
        field: 'description',
        label: 'Description',
      },
      {
        label: 'Ports',
      },
      {
        label: 'Front Image',
      },
      {
        label: 'Back Image',
      },
      {
        field: 'vendor_fk',
        label: 'Vendor',
      },
    ],
  },
  [HARDWARE]: {
    column: [
      {
        field: 'name',
        label: 'Name',
      },
    ],
  },
  [PARTMODEL]: {
    column: [
      {
        label: 'Type',
        field: 'type_name',
      },
      {
        label: '',
        field: 'type_id',
      },
      {
        label: 'Name',
        field: 'name',
      },
      {
        label: 'Model #',
        field: 'modelno',
      },
      {
        label: 'Part #',
        field: 'partno',
      },
      {
        label: 'Manufacturer',
        field: 'vendor_fk',
      },
      {
        label: 'Total Count',

      },
      {
        label: 'In Storage Rooms',

      },
      {
        label: 'Location',
        field: 'location',
      },
      {
        label: 'Port Count',

      },
    ],
  },
  [PART]: {
    column: [
      {
        label: 'Part Model',
        field: 'partmodel_fk',
        namefield: 'type_name name modelno',
        has_link: true,
        to: PART,
        link_id_field: 'part_pk',
      },
      {
        label: 'Count',
        field: 'pcount',
      },
      {
        label: 'Serial #',
        field: 'serial_no',
      },
      {
        label: 'Assignment',

      },
      {
        label: 'Location',
        field: 'room_fk',
        has_link: true,
        to: ROOM,
        link_id_field: 'room_fk',
      },
    ],
  },
  [CUSTOMER]: {
    column: [
      {
        field: 'name',
        label: 'Name',
      },
    ],
  },
  [ENDUSER]: {
    column: [
      {
        field: 'name',
        label: 'Name',
      },
      {
        field: 'email',
        label: 'Email',
      },
      {
        field: 'contact',
        label: 'Contact Info',
      },
      {
        field: 'location',
        label: 'Location',
      },
    ],
  },
  [PURCHASE]: {
    column: [
      {
        field: 'order_no',
        label: 'Order Name/#',
      },
      {
        field: 'vendor_fk',
        label: 'Vendor',
      },
    ],
  },
  [CABLE]: {
    column: [
      {
        label: 'ID',
        field: 'cable_id',
      },
    ],
  },
  [TELCOCIR]: {
    column: [
      {
        label: 'Circuit ID',
        field: 'circuit_id',
      },
      {
        label: 'Type',
        field: 'type_name',
      },
    ],
  },
  [POWERCIR]: {
    column: [],
  },
  [DEVICE_SER_PROFILE]: {
    column: [],
  },
  [OBJECTCATEGORIES]: {
    column: [
      {
        label: 'Name',
        field: 'name',
      },
      {
        label: 'Description',
        field: 'description',
      },
    ],
  },
  [TAG]: {
    column: [
      {
        label: 'Name',
        field: 'name',
      },
      {
        label: 'Slug',
        field: 'slug',
      },
      {
        label: 'Content Type(s)',
        field: 'type',
      },
    ],
  },
  [PASSWORD]: {
    column: [],
  },
  [IPADDRESS]: {
    column: [
      {
        field: 'ip_address',
        label: 'IP Address',
        has_link: true,
        to: IPADDRESS,
        link_id_field: 'ipaddress_pk',
      },
      {
        field: 'label',
        label: 'Label',
      },
      {
        field: 'type',
        label: 'Type',
      },
      {
        field: 'available',
        label: 'Available',
      },
      {
        field: 'subnet_fk',
        label: 'Subnet',
      },
      {
        field: 'device_fk',
        label: 'Device',
      },
      {
        field: 'netport_fk',
        namefield: 'port',
        label: 'Port',
      },
      {
        label: 'DNS Records',
      },
      {
        field: 'last_changed',
        label: 'Last updated',
      },
    ],
  },
  [VLAN]: {
    column: [
      {
        label: 'Number',
        field: 'number',
      },
      {
        label: 'Name',
        field: 'name',
      },
      {
        label: 'Description',
        field: 'description',
      },
      {
        label: 'Switches',
      },
      {
        label: 'Notes',
        field: 'notes',
      },
      {
        label: 'Last updated',
        field: 'last_edited',
        type: 'date',
      },
    ],
  },
  [VRF]: {
    column: [
      {
        label: 'Name',
        field: 'name',
      },
      {
        label: 'Default',
        field: 'is_it_default',
      },
      {
        label: 'Buildings',
      },
      {
        label: 'Description',
        field: 'description',
      },
    ],
  },
  [SUBNET]: {
    column: [
      {
        label: 'Network',
        field: 'network',
        has_link: true,
        to: SUBNET,
        link_id_field: 'subnet_pk',
      },
      {
        label: 'Mask Bits',
        field: 'mask_bits',
      },
      {
        label: 'Name',
        field: 'name',
        no_link: true,
      },
      {
        label: 'VRF Group',
        field: 'vrfgroup_fk',
      },
      {
        label: 'Category',
        field: 'catgeory_name',
      },
      {
        label: '% Used',
      },
      {
        label: 'Service Level',
        field: 'service_level',
      },
      {
        label: 'Type',
        field: 'type',
      },
      {
        label: 'IPs',
      },
      {
        label: 'Gateway',
        field: 'gateway',
      },
      {
        label: 'Range Begin',
        field: 'range_begin',
      },
      {
        label: 'Range End',
        field: 'range_end',
      },
    ],
  },
  [NETPORT]: {
    column: [
      {
        label: 'ID',
        field: 'netport_pk',
      },
      {
        label: 'Port',
        field: 'port',
      },
      {
        label: 'HWAddress',
        field: 'hwaddress',
      },
      {
        label: 'Description',
        field: 'description',
      },
      {
        label: 'Type',
        field: 'type_name',
      },
      {
        label: 'Discovered type',
        field: 'discovered_type',
      },
      {
        label: 'Up',
        field: 'up',
      },
      {
        label: 'VLAN IDs',
        field: 'vlan_fk',
        condition_field: 'primary_vlan_fk',
      },
      {
        label: 'Device',
        field: 'device_fk',
      },
      {
        label: 'Connectivity',
      },
      {
        label: 'Last updated',
        field: 'last_edited',
        type: 'date',
      },
    ],
  },
  [DNSZONE]: {
    column: [
      {
        label: 'Zone Name',
        field: 'name',
      },
      {
        label: 'Nameserver',
        field: 'nameserver',
      },
      {
        label: 'Notes',
        field: 'notes',
      },
      {
        label: 'VRF Group',
        field: 'vrfgroup_fk',
      },
    ],
  },
  [DNSRECORDS]: {
    column: [
      {
        label: 'Name',
        field: 'name',
      },
      {
        label: 'DNS Zone',
        field: 'dnszone_fk',
        has_link: true,
        to: DNSZONE,
        link_id_field: 'dnszone_fk',
        namefield: 'name nameserver',
        combine_symbol: '-',
      },
      {
        label: 'Content',
        field: 'content',
      },
      {
        label: 'Type',
        field: 'type',
      },
      {
        label: 'TTL',
        field: 'ttl',
      },
      {
        label: 'Prio',
        field: 'prio',
      },
    ],
  },
  [SOFTWARE_LICENSE_MODEL]: {
    column: [
      {
        label: 'Name',
        field: 'name',
      },
      {
        label: 'Track by',
        field: 'track_by',
      },
      {
        label: 'License type',
        field: 'license_type',
      },
    ],
  },
  [SOFTWARE]: {
    column: [
      {
        label: 'Name',
        field: 'name',
      },
      {
        label: 'Software Type',
        field: 'software_type',
      },
      {
        label: 'License Mode',
        field: 'softwarelicensemodel_fk',
      },
      {
        label: 'Vendor',
        field: 'vendor_fk',
      },
      {
        label: 'Category',
        field: 'category_name',
      },
      {
        label: 'License Count',
        field: 'licensed_count',
      },
      {
        label: 'Discovered Count',
        field: 'discovered_count',
      },
    ],
  },
  [SOFTWARE_IN_USE]: {
    column: [
      {
        label: 'Name',
        field: 'software_fk',
        has_link: true,
      },
      {
        label: 'Version',
        field: 'version',
      },
      {
        label: 'Install Date',
        field: 'install_date',
      },
      {
        label: 'Device',
        field: 'device_fk',
      },
      {
        label: 'User',
        field: 'enduser_fk',
      },
      {
        label: 'First Detected',
        field: 'first_detected',
        type: 'date',
      },
      {
        label: 'Last updated',
        field: 'last_updated',
        type: 'date',
      },
      {
        label: 'End of life',
      },
      {
        label: 'End of support',
      },
    ],
  },
  [SOFTWARE_EOL_EOS]: {
    column: [
      {
        label: 'Name',
        field: 'software_fk',
        has_link: true,
      },
      {
        label: 'Version',
        field: 'version',
      },
      {
        label: 'End of life Date',
        field: 'eol',
      },
      {
        label: 'End of Service Date',
        field: 'eos',
      },
    ],
  },
  [SERVICE]: {
    column: [
      {
        label: 'Service Name',
        field: 'displayname',
        has_link: true,
      },
      {
        label: 'Service Type',
        field: 'service_type',
      },
      {
        label: 'Vendor',
        field: 'vendor_fk',
      },
      {
        label: 'Category',
        field: 'category_name',
      },
      {
        label: 'Pinned',

      },
      {
        label: 'Service Instances',
      },
    ],
  },
  [SERVICE_INSTANCE]: {
    column: [
      {
        label: 'Service Name',
        field: 'service_fk',
        namefield: 'displayname',
        has_link: true,
      },
      {
        label: 'Start Mode',
        field: 'startmode',
      },
      {
        label: 'State',
        field: 'state',
      },
      {
        label: 'Device',
        field: 'device_fk',
      },
      {
        label: 'User',
        field: 'enduser_fk',
      },
      {
        label: 'First Detected',
        field: 'first_detected',
        type: 'date',
      },
      {
        label: 'Last updated',
        field: 'last_updated',
        type: 'date',
      },
    ],
  },
  [SERVICE_SCHEDULE]: {
    column: [
      {
        label: 'Caption',
        field: 'caption',
      },
      {
        label: 'Device',
        // TODO field: 'serviceinstance_fk.device_fk.name',
      },
      {
        label: 'Service Instance',
        field: 'serviceinstance_fk',
        namefield: 'service_fk',
        // TODO field: 'serviceinstance_fk.service_fk.displayname',
      },
      {
        label: 'Week(s)',
        field: 'weeks',
      },
      {
        label: 'Day(s)',
        field: 'days',
      },
      {
        label: 'Hour(s)',
        field: 'hours',
      },
      {
        label: 'Minute(s)',
        field: 'minutes',
      },
      {
        label: 'Month(s) of year',
        field: 'month_of_year',
      },
      {
        label: 'Day(s) of Month',
        field: 'days_of_month',
      },
      {
        label: 'Day(s) of Week',
        field: 'day_of_week',
      },
    ],
  },
  [SERVICE_PORT]: {
    column: [
      {
        label: 'Port',
        field: 'port',
        has_link: true,
      },
      {
        label: 'Device',
        field: 'device_fk',
      },
      {
        label: 'Ignore',

      },
      {
        label: 'Last updated',
        field: 'last_updated',
        type: 'date',
      },
    ],
  },
  [SERVICE_PORT_REMOTE_IP]: {
    column: [],
  },
  [NETWORK_SHARE]: {
    column: [
      {
        label: 'Name',
        field: 'name',
      },
      {
        label: 'Path',
        field: 'path',
      },
      {
        label: 'Device',
        field: 'device_fk',
      },
    ],
  },
  [APP_COMP]: {
    column: [
      {
        label: 'Name',
        field: 'name',
      },
      {
        label: 'Responsible customer or Department',
        field: 'customer_fk',
      },
      {
        label: 'On Device',
        field: 'device_fk',
      },
      {
        label: 'Dependency Chart',
      },
      {
        label: 'Impact Chart',
      },
      {
        label: 'Impact List',
      },
      {
        label: 'Notes',
        field: 'notes',
      },
    ],
  },
  [OS]: {
    column: [
      {
        label: 'Name',
        field: 'name',
      },
      {
        label: 'Vendor',
        field: 'vendor_fk',
      },
      {
        label: 'License Model',

      },
      {
        label: 'Purchased Licensed Count',

      },
      {
        label: 'Track Licensed Count by Keys',

      },
      {
        label: 'Discovered License Count',

      },
      {
        label: 'Discovered Non-Licensed Count',

      },
      {
        label: 'Total Count',

      },
      {
        label: 'Notes',
        field: 'notes',
      },
    ],
  },
  [OS_IN_USE]: {
    column: [
      {
        label: 'Device',
        field: 'device_fk',
        has_link: true,
      },
      {
        label: 'OS',
        field: 'os_fk',
      },
      {
        label: 'OS Version',
        field: 'os_version',
      },
      {
        label: 'OS Version #',
        field: 'os_version_no',
      },
      {
        label: 'OS License Key',
        field: 'os_license_key',
      },
      {
        label: 'Group Permissions',
      },
      {
        label: 'End of Life',
      },
      {
        label: 'End of Support',
      },
    ],
  },
  [OS_EOL_EOS]: {
    column: [
      {
        label: 'Operating System',
        field: 'os_fk',
        has_link: true,
      },
      {
        label: 'Version',
        field: 'version',
      },
      {
        label: 'End of Life Date',
        field: 'eol',
      },
      {
        label: 'End of Service Date',
        field: 'eos',
      },
    ],
  },
  [CERTIFICATE]: {
    column: [
      {
        label: 'Common Name',
        field: 'issued_to',
        has_link: true,
      },
      {
        label: 'Parent Certificate',

      },
      {
        label: 'Valid From',
        field: 'valid_from',
      },
      {
        label: 'Valid To',
        field: 'valid_to',
      },
      {
        label: 'Subject',
        field: 'subject',
      },
      {
        label: 'Days to expiry',

      },
    ],
  },
  [DEVICE_CERTIFICATE]: {
    column: [
      {
        label: 'Certificate',
        field: 'certificate_fk',
        namefield: 'issued_to',
        has_link: true,
      },
      {
        label: 'FQDN',
        field: 'fqdn',
      },
      {
        label: 'Device',
        field: 'device_fk',
      },
      {
        label: 'IP address',
        field: 'ipaddress_fk',
        namefield: 'ip_address',
      },
      {
        label: 'Serial #',
        field: 'serial_number',
      },
      {
        label: 'Valid From',
        field: 'valid_from',
      },
      {
        label: 'Valid To',
        field: 'valid_to',
      },
    ],
  },
};
