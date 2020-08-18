'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 测试数据接口
  router.get('/string', controller.index.handleString);
  router.post('/string', controller.index.handleString);
  router.get('/number', controller.index.handleNumber);
  router.post('/number', controller.index.handleNumber);
  router.get('/array', controller.index.handleArray);
  router.post('/array', controller.index.handleArray);
  router.get('/object', controller.index.handleObject);
  router.post('/object', controller.index.handleObject);

  // 文件模块
  router.post('/defaultFiles/:name', controller.file.defaultFile);
  // router.get('/files/:name', controller.file.index);
  router.post('/files/:name', controller.file.index);
  router.post('/files', controller.file.upload);
};
