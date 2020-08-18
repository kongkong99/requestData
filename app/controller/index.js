'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  handleString() {
    const { ctx } = this;
    ctx.status = 200;
    ctx.body = {
      code: 200,
      data: 'testString',
    };
  }

  handleNumber() {
    const { ctx } = this;
    ctx.status = 200;
    ctx.body = {
      code: 200,
      data: Math.random() * 10000000000,
    };
  }

  handleArray() {
    const { ctx } = this;
    const data = [];
    for (let i = 0; i < 20; i++) {
      data[i] = {
        index: i,
        value: Math.random() * i,
      };
    }
    ctx.status = 200;
    ctx.body = {
      code: 200,
      data,
    };
  }

  handleObject() {
    const { ctx } = this;
    ctx.status = 200;
    ctx.body = {
      code: 200,
      data: {
        name: 'zwh',
        value: Math.random() * 100,
      },
    };
  }
}

module.exports = LoginController;
