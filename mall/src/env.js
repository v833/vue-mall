let baseURL; // 用cors 和 jsons 使用
switch (process.env.NODE_ENV) { // nodejs 的环境变量
  case 'dev':
    baseURL = 'http://dev-mall-pre.springboot.cn/api'
    break;
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api'
    break;
  case 'prod':
    baseURL = 'http://mall-pre.springboot.cn/api'
    break;
    default:
    baseURL = 'http://mall-pre.springboot.cn/api'
    break

}

export default {
  baseURL
}