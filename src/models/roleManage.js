import {
  getRoleList,
  getAuthor,
  addRole,
  editRole,
  getRoleDetail,
  deleteRole,
} from '../services/roleManage';
import { resPromise } from '../utils/index';

export default {
  namespace: 'roleManage',
  state: {
    roleListObj: [],
    authorList: [],
    roleDetail: {},
    searchRoleName: undefined,
  },
  effects: {
    *getRoleList({ payload }, { call, put }) {
      const res = yield call(getRoleList, payload);
      if (res && res.success) {
        const { dataObject = {} } = res;
        yield put({
          type: 'setRoleListObj',
          payload: {
            roleListObj: dataObject,
            searchRoleName: payload.roleName,
          },
        })
      }
    },
    // 获取权限配置
    *getAuthor(_, { call, put }) {
      const res = yield call(getAuthor);
      if (res && res.success) {
        yield put({
          type: 'setAuthor',
          payload: {
            authorList: res.dataObject || [],
          },
        })
      }
    },
    *addOrEdit({ payload }, { call }) {
      const addType = payload.type === 'add';
      const method = addType ? addRole : editRole;
      const res = yield call(method, payload.params);
      
      return resPromise(res && res.success);
    },
    *getRoleDetail({ payload }, { call, put }) {
      const res = yield call(getRoleDetail, payload);
      if (res && res.success) {
        yield put({
          type: 'setRoleDetail',
          payload: {
            roleDetail: res.dataObject || {},
          },
        })
      }
    },
    *deleteRole({ payload }, { call }) {
      const res = yield call(deleteRole, payload);
      return resPromise(res && res.success);
    },
  },
  reducers: {
    setRoleListObj(state, { payload }) {
      return { ...state, ...payload };
    },
    setAuthor(state, { payload }) {
      return { ...state, ...payload };
    },
    setRoleDetail(state, { payload }) {
      return { ...state, ...payload };
    },
  },
}