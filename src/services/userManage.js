import qs from 'qs';
import request from '../utils/request';

// 新增用户
export async function addUser(params) {
  return request({
    url: '/system/user/add.json',
    method: 'POST',
    body: params,
  });
}

// 编辑用户
export async function editUser(params) {
  return request({
    url: '/system/user/edit.json',
    method: 'POST',
    body: params,
  });
}

// 用户列表
export async function fetchUserList(params) {
  return request({
    url: `/system/user/page.json?${qs.stringify(params)}`,
  });
}

// 角色列表
export async function getRoleList(params) {
  return request({
    url: `/system/role/tree.json?${qs.stringify(params)}`,
  });
}
 // 用户详情
export async function getUserDetail(params) {
  return request({
    url: `/system/user/detail.json?${qs.stringify(params)}`,
  });
}

// 删除用户
export async function deleteUser(params) {
  return request({
    url: `/system/user/remove.json?${qs.stringify(params)}`,
    method: 'DELETE',
  });
}

// 停用用户
export async function stopUser(params) {
  return request({
    url: `/system/user/disable.json?${qs.stringify(params)}`,
  });
}

// 启用用户
export async function startUser(params) {
  return request({
    url: `/system/user/enable.json?${qs.stringify(params)}`,
  });
}

// 重置密码
export async function resetPwd(params) {
  return request({
    url: `/system/user/reset.json?${qs.stringify(params)}`,
  })
}