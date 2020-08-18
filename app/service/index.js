'use strict';
const Service = require('egg').Service;

class LoginService extends Service {
  async login(data) {
    const { app } = this;
    const { name, password } = data;
    const res = await app.mysql.select('person', {
      where: {
        name, password,
      },
    });
    if (res) {
      const { id, name, type, price = null } = res[0];
      return {
        id, name, type, price,
      };
    }
    return false;
  }

  async register(data) {
    const { app } = this;
    const { name, password } = data;
    try {
      await app.mysql.insert('person', {
        name,
        password,
        type: 0,
        price: 100,
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  async user() {
    const { app } = this;
    const res = await app.mysql.select('person', {
      where: {
        type: 0,
      },
    });
    return res;
  }
}

module.exports = LoginService;
