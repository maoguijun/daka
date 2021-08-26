/*
 * @Author: maoguijun
 * @Date: 2021-08-26 19:09:28
 * @LastEditors: maoguijun
 * @LastEditTime: 2021-08-26 21:58:40
 * @FilePath: \guanaitongdaka\app\schedule\daily\daily_daka.js
 */
'use strict';
const Subscription = require('egg').Subscription;
const guanaitong = require('../../../customer/guanaitong');

class UpdateCache extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      // interval: "10s", // 1 分钟间隔
      cron: '0 */10 21-23 * * *',
      // cron: '0 58 21 * * *',
      type: 'all', // 指定所有的 worker 都需要执行
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    guanaitong();
  }
}

module.exports = UpdateCache;
