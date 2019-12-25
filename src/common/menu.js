import { isUrl } from '../utils';

const menuData = [
  // {
  //   name: '省级联动',
  //   icon: 'star',
  //   path: 'province2',
  // },
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
  // {
  //   name: '地址选择',
  //   icon: 'setting',
  //   path: 'addressChoose',
  // },
  // {
  //   name: 'page',
  //   icon: 'star',
  //   path: 'pageManage',
  // },
  {
    name: 'ToDo',
    icon: 'star',
    path: 'todoManage',
  },
  {
    name: '测试',
    icon: 'star',
    path: 'test',
  },
  // {
  //   name: '分析chart',
  //   icon: 'star',
  //   path: 'aone',
  // },
  {
    name: '系统管理',
    icon: 'setting',
    path: 'systermManage',
    children: [
      {
        name: '用户管理',
        icon: 'star',
        path: 'userManage',
      },
      {
        name: '角色管理',
        icon: 'star',
        path: 'roleManage',
      },
    ],
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
