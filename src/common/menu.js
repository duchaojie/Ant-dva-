import { isUrl } from '../utils';

const menuData = [
  {
    name: '系统管理',
    icon: 'setting',
    path: 'system',
    children: [
      {
        name: '用户管理',
        path: 'userManage',
        permission: 'mgr',
      },
      {
        name: '角色管理',
        path: 'roleManage',
        permission: 'role',
      },
    ],
  },
  {
    name: '测试',
    icon: 'star',
    path: 'test',
  },
  {
    name: '省级联动',
    icon: 'star',
    path: 'province2',
  },
  {
    name: '数据管理',
    icon: 'setting',
    path: 'masterData',
    // permission: 'data',

  },
  {
    name: '配方管理',
    icon: 'setting',
    path: 'masterRecipe',
  },
  {
    name: '地址选择',
    icon: 'setting',
    path: 'addressChoose',
  },
  {
    name: '待测',
    icon: 'setting',
    path: 'waitingManage',
  },
];

export function formatterMenuData(data = menuData, parentPath = '/') {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
    };
    if (item.children) {
      result.children = formatterMenuData(item.children, `${parentPath}${item.path}/`);
    }

    return result;
  });
}
