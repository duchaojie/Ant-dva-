// import React from 'react';

// class Welcome extends React.PureComponent {
//   render() {
//     return <h2>WELCOME</h2>;
//   }
// }

// export default Welcome;



import React from 'react';
import { Button } from 'antd';
import { Link } from 'dva/router';
import styles from './index.css';

export default class Welcome extends React.PureComponent {
  render() {
    return (
      <>
        <div className={styles.box}>
          <h1 style={{ paddingLeft: 30 }}>欢迎进入系统</h1>
          <div className={styles.center}>
            {/* // <Link className={styles.btn} to='/activeManagement/qualityAnalysis'><Button type='dashed'>省级联动</Button></Link>
            // <Link className={styles.btn} to='/masterProject/cashFlow'><Button type='dashed'>系统管理</Button></Link>
            // <Link className={styles.btn} to='/masterProject/product'><Button type='dashed'>数据管理</Button></Link> */}
          </div>
        </div>
      </>
    );
  }
}
