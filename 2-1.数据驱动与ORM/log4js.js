

// 分类1：可以多个分类用同一个出口
// 名称：sql 要用到出口名称
// 出口名称：写入到文件

// const logger = log4js.getLogger()//得到一个日志对象 传入参数日志的分类例如：sql日志 请求日志等等自定义的 不传参数为默认日志
// logger.level = "all" ;//默认级别为off 只有比他级别高或等于的才会在控制台输出 调成all 所有的都可以输出
// logger.info('abc');//默认在控制台打印  [2021-09-23T20:25:08.701] [INFO] default - abc
const {logger } = require("./logger");
logger.info('abc');