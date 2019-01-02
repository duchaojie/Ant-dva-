import React from 'react';
import { Route, Switch } from 'dva/router';
import { Layout } from 'antd';
import ErrorBoundary from '../components/ErrorBoundary';
import Breadcrumb from './Breadcrumb';
import Exception404 from '../routes/exception/404';
import Exception403 from '../routes/exception/403';
import { getRoutes } from '../utils';

export default function BasicContent(props) {
  const { match, routerData, permissions } = props;
  const { pathname } = window.location;

  const renderRoute = () => {
    const router = getRoutes(match.path, routerData).filter(item => item.path === pathname)[0];
    // 当 router 存在时，需要过滤权限，并覆盖到对象中。
    // 无权限时，则展示 403
    if (router) {
      const router403 = { ...router, component: Exception403 };
      // 当对象没有 permissions 属性时，表示该页面为白名单
      if (!router.permissions) {
        return router;
      }
      // 当为请求到用户数据时，则暂时展示空白页，解决页面手动刷新时先出现 403或者404，再渲染成正常页面的跳动问题
      if (!permissions) {
        return {
          exact: false,
          path: pathname,
          component: null,
        };
      }
      // 当该用户有权限码时，需要过滤权限码，并进行覆盖
      if (permissions.length > 0) {
        const per = router.permissions.filter(item => permissions.includes(item));
        return per.length > 0 ? {...router, permissions: per} : router403;
      }

      return router403;
    }

    // 无页面时，则展示 404
    return {
      exact: false,
      path: pathname,
      component:  Exception404,
    };
  };
  const routerItem = renderRoute();

  return (
    <Layout.Content
      style={{ margin: '12px 12px 0', padding: '20px', height: '100%', background: '#fff' }}
    >
      <Breadcrumb />
      <ErrorBoundary>
        <Switch>
          <Route {...routerItem} />
        </Switch>
      </ErrorBoundary>
    </Layout.Content>
  );
}
