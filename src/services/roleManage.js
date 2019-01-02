import { stringify } from 'qs';
import request from '../utils/request';

export async function getRoleList(params) {
  return request({
    url: `/system/role/page.json?${stringify(params)}`,
  });
}

export async function getAuthor(params) {
  return request({
    url: `/system/menu/list/tree.json?${stringify(params)}`,
  });
}

export async function addRole(params) {
  return request({
    url: '/system/role/add.json',
    method: 'POST',
    body: params,
  });
}

export async function editRole(params) {
  return request({
    url: '/system/role/edit.json',
    method: 'POST',
    body: params,
  });
}

export async function getRoleDetail(params) {
 return request({
   url: `/system/role/detail.json?${stringify(params)}`,
 });
}

export async function deleteRole(params) {
  return request({
    url: `/system/role/remove.json?${stringify(params)}`,
    method: 'DELETE',
  });
 }