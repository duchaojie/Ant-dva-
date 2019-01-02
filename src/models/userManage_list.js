import {
  addUser,
  editUser,
  fetchUserList,
  getRoleList,
  getUserDetail,
  deleteUser,
  stopUser,
  startUser,
  resetPwd,
} from '../services/userManage';
import { toast, resPromise } from '../utils';

export default {
  namespace: 'userManage_list',

  state: {
    data: {},
    searchKeywords: {}, // 保存搜索关键词
    roleList: [],
    userDetail: {},
  },

  effects: {
    *FETCH_USER_LIST({ payload }, { call, put }) {
      const params = { ...payload.paramsObj, currPageNo: payload.currPageNo };
      const data = yield call(fetchUserList, params);
      if (data && data.success) {
        yield put({
          type: 'setData',
          payload: {
            data: data.dataObject || {},
            searchKeywords: payload.paramsObj,
          },
        });
      }
    },
    *CREATE_OR_EDIT({ payload }, { call }) {
      const addType = payload.type === 'add';
      const method = addType ? addUser : editUser;
      const data = yield call(method, payload.paramsObj);
      return resPromise(data && data.success);
    },
    *GET_ROLE_LIST(_, { call, put }) {
      const res = yield call(getRoleList);
      if (res && res.success) {
        yield put({
          type: 'setRoleList',
          payload: {
            roleList: res.dataObject || [],
          },
        })
      }
    },
    *GET_USER_DETAIL({ payload }, { call, put }) {
      const res = yield call(getUserDetail, payload);
      if (res && res.success) {
        yield put({
          type: 'setUserDetail',
          payload: {
            userDetail: res.dataObject || {},
          },
        })
      }
    },
    *DELETE_USER({ payload }, { call }) {
      const res = yield call(deleteUser, payload);
      return resPromise(res && res.success);
    },
    *STOP_OR_START({ payload }, { call }) {
      const { status, userCode } = payload;
      const method = status ? stopUser : startUser;
      const res = yield call(method, {userCode});
      return resPromise(res && res.success);
    },
    *RESET_PWD({ payload }, { call }) {
      const res= yield call(resetPwd, payload);
      if (res && res.success) {
        toast('success', '重置密码成功');
      }
    },
  },
  reducers: {
    setData(state, { payload }) {
      return { ...state, ...payload };
    },
    setRoleList(state, { payload }) {
      return { ...state, ...payload };
    },
    setUserDetail(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
