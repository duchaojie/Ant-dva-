import { message, Select } from 'antd';
import moment from 'moment';
import AppStore from '../index';

export function getRoutes(path, routerData) {
  let routes = Object.keys(routerData).filter(
    routePath => routePath.indexOf(path) === 0 && routePath !== path
  );
  routes = routes.map(item => item.replace(path, ''));
  return routes.map(item => {
    return {
      exact: true,
      ...routerData[`${path}${item}`],
      key: `${path}${item}`,
      path: `${path}${item}`,
    };
  });
}

/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;

export function isUrl(path) {
  return reg.test(path);
}

// /userinfo/2144/id => ['/userinfo','/useinfo/2144,'/userindo/2144/id']
export function urlToList(url) {
  const urllist = url.split('/').filter(i => i);
  return urllist.map((urlItem, index) => {
    return `/${urllist.slice(0, index + 1).join('/')}`;
  });
}

/*
* yield 队列的延迟，默认时间 2000ms
* 调用方式：
*   Generator：yield delay(1000)
*   fun：delay(1000).then(() => console.log('success'));
* */

export function delay(time = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

// 全局 toast 提示
// type: [success, error, warning]
export function toast(type, text, time = 3) {
  message.config({ maxCount: 1 });
  return message[type](text, time);
}

// 组件内封的 fetch 请求需要有一个超时返回登录态的功能
export function loginTimeOut(data) {
  if (data && ['DENY', 'UNLOGIN'].includes(data.errorCode)) {
    // 判断当前是否已经弹窗提示，防止多次 dispatch
    const msgEle = document.getElementsByClassName('ant-message-notice');
    if (msgEle.length === 0) {
      const { pathname, search } = window.location;
      toast('error', '登录超时，请重新登录');
      delay(1000).then(() => {
        AppStore.dispatch({
          type: 'global/GO_TO',
          payload: `/user/login?go=${pathname}${search}`,
        });
      });
    }
    return false;
  }
  return true;
}

// 字符串url链接获取参数
export function getUrlParameter(name, link = window.location.href) {
  const url = link.slice(link.indexOf('?'), link.length);
  const r = url.substr(1).match(new RegExp(`(^|&)${name}=([^&]*)(&|$)`));

  if (r !== null) {
    return unescape(r[2]);
  }

  return null;
}

// 获取 url 参数集合
export function getUrlParams(url) {
  const d = decodeURIComponent;
  let queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  const obj = {};
  if (queryString) {
    queryString = queryString.split('#')[0]; // eslint-disable-line
    const arr = queryString.split('&');
    for (let i = 0; i < arr.length; i += 1) {
      const a = arr[i].split('=');
      let paramNum;
      const paramName = a[0].replace(/\[\d*\]/, (v) => {
        paramNum = v.slice(1, -1);
        return '';
      });
      const paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
      if (obj[paramName]) {
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = d([obj[paramName]]);
        }
        if (typeof paramNum === 'undefined') {
          obj[paramName].push(d(paramValue));
        } else {
          obj[paramName][paramNum] = d(paramValue);
        }
      } else {
        obj[paramName] = d(paramValue);
      }
    }
  }
  return obj;
}

// 生产随机数，可指定位数
export function genNonDuplicateID(length) {
  return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}

/*
* moment 和 dateString 之间的转化
* API: {
*   value: 值
*   isMoment: 是否转化成 string，默认 是
*   format: 转化格式
* }
* */
export function mmtToStr(value, isMoment = true, format = 'YYYY-MM-DD') {
  if (value) {
    if (isMoment) {
      return moment.isMoment(value) ? value.format(format) : moment(value).format(format);
    }

    return moment(value, format);
  }

  return null;
}

/*
* 系统以"万元"为单位，前端进行数据过滤
*  true：*10000
*  false：/10000
* */
export function unitTransform(num, bool) {
  if (!isNaN(+num)) {
    if (bool) {
      return String(num * 10000);
    }
    return String(num / 10000);
  }
}

// 数字千位符过滤，补充后面的小数点
export function toThousands(num, unit = '万元') {
  let number = unitTransform(+num, false);

  if (!number) {
    return `0.00${unit}`;
  }

  number = ((+number).toFixed(2)).toLocaleString('en-US');

  if (/\./.test(number)) {
    const arr = number.split('.')[1];

    return arr.length < 2 ? `${number}0${unit}` : `${number}${unit}`;
  }

  return `${number}.00${unit}`;
}
// 展示百分比
export function toRate(num) {
  const parseNum = +num;
  if (!isNaN(parseNum)) {
    return `${parseNum.toFixed(2)}%`;
  }
  return '--';
}
/*
* 查看当前操作是否有权限
* perm: 操作对应的权限码
* perms: 该用户的权限码集合
* reactNode: 可返回对应的操作节点 => reactNode || string
* 如果不传 reactNode 则会返回 bool，有权限 = true，反之为 false
* */
export function isPerm(perms, perm, reactNode) {
  if (perms.includes(perm)) {
    return reactNode || true;
  }

  return false;
}

// Table 列表的翻页组件数据
export function pagination(data, cb, ...props) {
  return {
    ...props,
    hideOnSinglePage: true,
    current: data.currPageNo || 1,
    pageSize: data.limit || 20,
    total: data.total || 1,
    onChange: cb,
  };
}

// 将数据遍历后生成 option 节点
export function eachItemsToOption(options, props) {
  return (
    // eslint-disable-next-line
    <Select {...props} style={{ width: '100%' }}>
      {Object.keys(options).map(item =>
        // eslint-disable-next-line
        <Select.Option key={item}>{options[item]}</Select.Option>)}
    </Select>
  );
}

// du 在 routes/masterDtata/detail/Detection.js
// 将数据遍历后生成 option 节点
export function eachSelect(options, props) {
  return (
    // eslint-disable-next-line
    <Select style={{ width: '100%' }} {...props}>
      {options.map(item =>
        // eslint-disable-next-line
        <Select.Option key={item}>{item}</Select.Option>)}
    </Select>
  );
}

// Promise回传结果
export function resPromise(res) {
  return new Promise((resolve) => {
    resolve(res);
  })
}
/**
 * 备注：将对象中的key替换成指定的key
 * replaceKey([{ id: '123', name: 'sam' }],{id: 'value', name: 'label'})
 * => [{ value: '123', label: 'sam' }]
 * @param {Array} data
 * @param {Object} keyObj
 */
export function replaceKey(data, keyObj) {
  return data.map((item) => {
    const obj = item;
    Object.keys(keyObj).forEach((ele) => {
      if (obj[ele]) {
        obj[keyObj[ele]] = obj[ele];
        delete obj[ele];
      }
    });
    if (obj.children && obj.children.length > 0) {
      replaceKey(obj.children, keyObj);
    }
    return obj;
  });
}

// 设置本地存储
export function getStorage(name) {
  const data = window.localStorage[name];

  return (data && data.includes('[')) ? JSON.parse(data) : [];
}

export function getStorageId(name, field, id) {
  const data = getStorage(name);
  const filterData = data.filter(item => item[field] === id)[0];

  return filterData || {};
}

export function setStorage(name, data) {
  window.localStorage[name] = JSON.stringify(data);
}
// 修改本地数据
export function storageModify(name, field, values) {
  const list = getStorage(name);

  if (list.length > 0) {
    const is = list.some((item, index) => {
      if (item[field] === values[field]) {
        list[index] = values;
        return true;
      }
      return false;
    });

    if (!is) {
      list.push(values);
    }
  } else {
    list.push(values);
  }

  setStorage(name, list);

  return list;
}

export function storageRemove(name, field, id) {
  const list = getStorage(name);
  const arr = [];

  list.forEach(item => {
    if (item[field] !== id) {
      arr.push(item);
    }
  });

  setStorage(name, arr);
  return arr;
}


// 数字保留两位小数
/**
 * 12       --> "12.00"
 * 1234567  --> "1,234,567.00"
 * 12345.67 --> "12,345.67"
 */
export function formatMoney(money) {
  if (money === 0) {
    return 0;
  }
  if (money && money !== null) {
    return `${money}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','); // 不保留2位数了
    // return Number(money).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
}


export function transformDate(date) {
  return date ? date.split(' ')[0] : '';
}

/**
 * 文件下载，可以用 https://github.com/eligrey/FileSaver.js/ 替代。
 * @param {Blob Object} blob
 * @param {string} fileName
 */

export function downloadFile(blob, fileName) {
  if (window.navigator && window.navigator.msSaveOrOpenBlob) { // 兼容IE
    window.navigator.msSaveOrOpenBlob(blob, fileName);
  } else {
    const a = document.createElement('a');
    a.style = "display: none";
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}

// url = 'XXXXXX.com'
// text = '文件名称'
// handleSubmit = () => {
//   request({
//     url: `url`,
//     method: 'GET',
//     type: 'download',
//   }).then(res => {
//     if (res.success === false) {
//       return;
//     }
//     downloadFile(res, this.text);
//   });
// }
