// 该文件只作为代理线上数据而使用，请不要添加其他 mock 接口
const action = '/am/(.*)';
const asset = 'http://dev.fa.abssqr.cn/am';

module.exports = {
  [`GET ${action}`]: `${asset}`,
  [`POST ${action}`]: `${asset}`,
  [`PUT ${action}`]: `${asset}`,
  [`DELETE ${action}`]: `${asset}`,
};
