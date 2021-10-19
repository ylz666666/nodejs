const URL = require('url');

// console.log(new URL.URL("https:www.baidu.com"));  //(new URL.URL("https:www.baidu.com") == URL.parse(new URL.URL("https:www.baidu.com"));
/**返回一个URL对象
 * URL {
  href: 'https://www.baidu.com/',
  origin: 'https://www.baidu.com',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'www.baidu.com',
  hostname: 'www.baidu.com',
  port: '',
  pathname: '/',
  search: '',
  searchParams: URLSearchParams {},
  hash: ''
}
 */
// const url = URL.format({
//     href: 'https://www.baidu.com/',
//     origin: 'https://www.baidu.com',
//     protocol: 'https:',
//     username: '',
//     password: '',
//     host: 'www.baidu.com',
//     hostname: 'www.baidu.com',
//     port: '',
// }); //把url路径对象转换成字符串
// console.log(url);

