// 产品编辑设置页 - 容器组件
import React from 'react';
import { routerRedux, Redirect, Route, Switch } from 'dva/router';
import { connect } from 'dva';
import { Tabs } from 'antd';
import Breadcrumb from 'components/Breadcrumb';
import { getRoutes } from '../../utils/utils';

const TabPane = Tabs.TabPane;

@connect()
export default class ProductSetting extends React.Component {
  handleTabChange = key => {
    const { dispatch, match } = this.props;
    dispatch(routerRedux.push(`${match.url}/${key}`));

  };
  render() {
    const tabList = [
{
  key: 'baseInfo',
  tab: '基础信息',
},
      {
        key: 'structure',
        tab: '新增产品',
      },
    ];
    const { match, routerData, location } = this.props;
    const routes = getRoutes(match.path, routerData);
    return (
      <>
        <Breadcrumb />
        <Tabs
          activeKey={location.pathname.replace(`${match.path}/`, '')}
          onChange={this.handleTabChange}
        >
          {tabList.map(item => (
            <TabPane tab={item.tab} key={item.key} />
          ))}
        </Tabs>

        <Switch>
          {routes.map(item => (
            <Route key={item.key} path={item.path} component={item.component} exact={item.exact} />
          ))}
          <Redirect to="/product/setting/structure" />
        </Switch>
      </>
    );
  }
}


// 路由配置
// 在 layout 里面 再配置

 // '/product/setting': {
    //   component: dynamicWrapper(app, [], () => import('../routes/ProductManage/ProductSetting')),
    // },
 // '/product/setting/baseInfo': {
    //   component: dynamicWrapper(app, [], () => import('../routes/ProductManage/BaseInfo')),
    //   name: '设置（基础信息）',
    // },
    // '/product/setting/structure': {
    //   component: dynamicWrapper(app, [], () => import('../routes/ProductManage/Structure')),
    //   name: '设置（投资结构）',
    // },
