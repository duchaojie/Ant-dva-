/*
* mock 数据接口
* 数据返回以及逻辑处理可以放在 ./mock 文件中进行处理。请注意命名规范
* 代理线上接口：cnpm run proxy
* */
const fs = require('fs');
const path = require('path');
const ProxyIndex = require('./mock');
import { delay } from 'roadhog-api-doc';


// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';
const proxy = {};
// 将 mockJS 进行组装
fs.readdirSync(path.join(__dirname, 'mock')).forEach(file => {
  if (file !== 'index.js') {
    const isFile = fs.statSync(path.join(__dirname, 'mock', file)).isFile();
    if (isFile) {
      const extname = path.extname(file);
      switch (extname) {
        case '.js':
          Object.assign(proxy, require(`./mock/${file}`));
          break;
        case '.json':
          Object.assign(proxy, {
            [file]: file,
          });
          break;
        default:
      }
    }
  }
});

export default (noProxy ? ProxyIndex : delay(proxy, 1000));




// 代理接口
// import { currentUser } from './mock/api';
// import { format, delay } from 'roadhog-api-doc';

// // 本地 service mock 支持值为 Object 和 Array 请参考：https://github.com/ant-design/ant-design-pro/blob/1.4.4/.roadhogrc.mock.js
// const mockApi = {
//   'GET /api/currentUser': {
//     ...currentUser,
//   },
//   'POST /api/login/account': (req, res) => {
//     const { password, userName, type } = req.body;
//     if (password === '888888' && userName === 'admin') {
//       res.send({ status: 'ok', type });
//     }
//     res.send({ status: 'error', type, errorMessage: '账号密码错误' });
//   },
// };
// // 是否禁用代理
// const noProxy = process.env.NO_PROXY === 'true';

// const action = '/am/(.*)';
// const asset = 'http://test.pod1.abssqr.cn:8039/am/';
// // 代码中会兼容本地 service mock 以及部署站点的静态数据
// const proxy = {
//   ...mockApi,
//   // proxy 实际请求服务端接口
//   [`GET ${action}`]: `${asset}`,
//   [`POST ${action}`]: `${asset}`,
//   [`PUT ${action}`]: `${asset}`,
//   [`DELETE ${action}`]: `${asset}`,
// };

// export default (noProxy ? {} : delay(proxy, 1000));

