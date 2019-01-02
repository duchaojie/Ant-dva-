import fetch from 'dva/fetch';
import { toast, loginTimeOut } from './index';

/**
 * fetch timeout
 * 弊端：超时后，有可能还是会获取到服务端的 response
 */
// eslint-disable-next-line
function fetchTimeOut(fetch, timeout) {
  return Promise.race([
    fetch,
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('请求超时')), timeout);
    }),
  ]);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;

  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 * isError：true 时可自定义错误
 */
export default function request({ url, method = 'GET', headers, body, onStart, onSuccess, onError, that }) {
  // const defaultOptions = {
  //   credentials: 'include', // 请求凭证，会发送类似 cookie 等信息
  // };
  const newOptions = { credentials: 'include', method, body, headers };
  const methodArr = ['POST', 'PUT'];
  if (methodArr.indexOf(method) > -1) {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }

  // eslint-disable-next-line
  onStart && onStart();
  // eslint-disable-next-line
  that && that.setState({ loading: true }); // 如果有 that 对象，则处理 loading 数据

  // adminservice 作为前后端公共参数使用，前后端根据这个参数来匹配到同一个服务器上，消除跨域问题
  return fetchTimeOut(fetch(`/am${url}`, newOptions), 1000 * 120)
    .then(checkStatus)
    .then(response => response.json())
    .then((data) => {
      if (loginTimeOut(data)) {
        // 只要存在一个，就表示是组件的请求方式
        if (onStart || onSuccess || onError) {
          // eslint-disable-next-line
          that && that.setState({ loading: false });
          if (data.success) return onSuccess && onSuccess(data);
          toast('error', data.message || '系统异常');
          return onError && onError(data);
        }
        // 都不存在，适合services的请求方式
        if (data && !data.success) {
          toast('error', data.message || '系统异常');
        }
        return data;
      }
    })
    .catch((error) => {
      if ('stack' in error && 'message' in error) {
        toast('error', error.message || `请求错误: ${url}`);
      }

      return error;
    });
}
