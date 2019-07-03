export default {
  session: {
    user: {},
    authenticated: false,
    checked: true,
  },
  global: {
    loading: false,
  },
  login: {
    error: '',
  },
  signup: {
    error: '',
    success: '',
  },
  listView: {
    list: [],
    isFetched: false,
    error: null,
  },
  fieldList: {
    isFetched: false,
    fields: {},
    error: null,
    columnLists: {},
  },
  deviceView: {
    device: [],
    error: {},
    loaded: false,
  },
  relatedData: {
    data: {},
    error: {},
    loaded: {},
  },
};
