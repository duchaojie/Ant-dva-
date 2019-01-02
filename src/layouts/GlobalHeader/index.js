import React, { PureComponent } from 'react';
import { Menu, Icon, Dropdown, Spin } from 'antd';
import { Link } from 'dva/router';
import styles from './index.less';

export default class GlobalHeader extends PureComponent {
  // 初始化数据全部放在这里来请求。
  componentDidMount() {
    const { dispatch, location } = this.props;
    // 当路由只有域名时，不初始化请求数据。
    if (location.pathname !== '/') {
      // 查询用户信息
      dispatch({
        type: 'global/INFO',
      });
    }
  }

  onMenuClick = (item) => {
    if (item.key === 'logout') {
      this.props.dispatch({
        type: 'user/logout',
      });
    }
  };

  toggle = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
  };

  render() {
    const { collapsed, info } = this.props;

    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        <Menu.Item key="personal">
          <Link to="/personal/center"><Icon type="user" />个人中心</Link>
        </Menu.Item>
        <Menu.Item key="secure">
          <Link to="/secure/setting"><Icon type="lock" />安全设置</Link>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <Icon type="logout" />退出登录
        </Menu.Item>
      </Menu>
    );
    return (
      <div className={styles.header}>
        <Icon
          className={styles.trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <div className={styles.right}>
          {/* <Link to="/personal/notification">
            <span className={styles.action}>
              <div className={styles.news} />
              <Icon type="mail" theme="outlined" />
            </span>
          </Link> */}
          <Dropdown overlay={menu}>
            <span className={`${styles.action} ${styles.account}`}>
              <span className={styles.name}>{info.account || <Spin size="small" />}</span>
            </span>
          </Dropdown>
        </div>
      </div>
    );
  }
}
