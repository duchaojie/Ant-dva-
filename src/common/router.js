import { createElement } from 'react';
import dynamic from 'dva/dynamic';

let routerDataCache;

const modelNotExisted = (app, model) =>
  // eslint-disable-next-line
  !app._models.some(({ namespace }) => {
    return namespace === model.substring(model.lastIndexOf('/') + 1);
  });

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => {
  // () => require('module')
  // transformed by babel-plugin-dynamic-import-node-sync
  if (component.toString().indexOf('.then(') < 0) {
    models.forEach(model => {
      if (modelNotExisted(app, model)) {
        // eslint-disable-next-line
        app.model(require(`../models/${model}`).default);
      }
    });
    return props => {
      if (!routerDataCache) {
        routerDataCache = getRouterData(app);
      }
      return createElement(component().default, {
        ...props,
        routerData: routerDataCache,
      });
    };
  }
  // () => import('module')
  return dynamic({
    app,
    models: () =>
      models.filter(model => modelNotExisted(app, model)).map(m => import(`../models/${m}.js`)),
    // add routerData prop
    component: () => {
      if (!routerDataCache) {
        routerDataCache = getRouterData(app);
      }
      return component().then(raw => {
        const Component = raw.default || raw;
        return props =>
          createElement(Component, {
            ...props,
            routerData: routerDataCache,
          });
      });
    },
  });
};

export const getRouterData = app => {
  return {
    '/': {
      component: dynamicWrapper(app, ['user', 'global'], () => import('../layouts/BasicLayout')),
    },
    '/welcome': {
      component: dynamicWrapper(app, [], () => import('../routes/welcome')),
      name: '欢迎',
    },
    '/exception/403': {
      component: dynamicWrapper(app, [], () => import('../routes/exception/403')),
      name: '无权限访问',
    },
    '/exception/404': {
      component: dynamicWrapper(app, [], () => import('../routes/exception/404')),
      name: '该页面不存在',
    },
    '/exception/500': {
      component: dynamicWrapper(app, [], () => import('../routes/exception/500')),
      name: '服务器错误',
    },
    '/user': {
      component: dynamicWrapper(app, [], () => import('../layouts/UserLayout')),
    },
    '/user/login': {
      component: dynamicWrapper(app, ['user'], () => import('../routes/user/Login')),
      name: '登录',
    },
    /*
    * 以下为页面相关路由设置，其他请不要动
    * 权限：各个组件中必须包含该页面所涉及操作的所有权限码
    * */
    // ==> 个人中心
    '/personal/center': {
      component: dynamicWrapper(app, ['user'], () => import('../routes/personalCenter')),
      name: '个人中心',
    },
    // ==> 安全设置
    '/secure/setting': {
      component: dynamicWrapper(app, ['user'], () => import('../routes/Settings/UserManage/index')),
      name: '安全设置',
    },
     // 系统设置
    '/systermManage/userManage': {
      component: dynamicWrapper(app, [], () => import('../routes/Settings/UserManage/index')),
      name: '用户管理',
    },
    '/systermManage/roleManage': {
      component: dynamicWrapper(app, [], () => import('../routes/Settings/RoleManage/index')),
      name: '角色管理',
    },
    '/test': {
      component: dynamicWrapper(app, [], () => import('../routes/test')),
      name: '测试',
    },
    // '/province2': {
    //   component: dynamicWrapper(app, [], () => import('../routes/province2')),
    //   name: '省二级联动',
    // },
    '/masterData': {
      component: dynamicWrapper(app, [], () => import('../routes/masterData/list')),
      name: '数据管理',
    },
    '/masterData/list/detail': {
      component: dynamicWrapper(app, [], () => import('../routes/masterData/detail')),
      name: '数据详情',
    },
    '/masterRecipe': {
      component: dynamicWrapper(app, [], () => import('../routes/masterRecipe/list')),
      name: '主配方',

    },
    '/masterRecipe/list/detail': {
      component: dynamicWrapper(app, [], () => import('../routes/masterRecipe/detail')),
      name: '基本详情',

    },
    // '/addressChoose': {
    //   component: dynamicWrapper(app, [], () => import('../routes/addressChoose/index')),
    //   name: '地址选择',
    // },
    // '/pageManage': {
    //   component: dynamicWrapper(app, [], () => import('../routes/pageManage')),
    //   name: '页面管理',
    // },
    '/todoManage': {
      component: dynamicWrapper(app, [], () => import('../routes/todoManage')),
      name: '页面管理',
    },
  };
};
