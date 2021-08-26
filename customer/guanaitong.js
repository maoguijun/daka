/*
 * @Author: maoguijun
 * @Date: 2021-08-26 19:07:43
 * @LastEditors: maoguijun
 * @LastEditTime: 2021-08-26 21:56:44
 * @FilePath: \guanaitongdaka\customer\guanaitong.js
 */
'use strict';
const shell = require('shelljs');

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const start = async () => {
  console.log(13, 222222);
  // // 取屏幕的分辨率
  const st = shell.exec('adb shell wm size');
  const reg = /(\d+)x(\d+)/gi;
  reg.test(st);
  const width = RegExp.$1;
  const height = RegExp.$2;

  // 打开关爱通
  shell.exec(
    'adb shell am start -n com.guanaitong/com.guanaitong.launch.activity.WelcomeActivity'
  );
  await sleep(5000);

  // 点击我的
  shell.exec(`adb shell input tap ${width - 130} ${height - 90}`);
  await sleep(1000);

  // 滑到底部
  shell.exec('adb shell input swipe 0 2000 0 0');
  await sleep(1000);

  // 点击 奋斗食代
  shell.exec(`adb shell input tap 166 ${height - 840}`);
  await sleep(1000);

  // 点击 领取
  shell.exec(`adb shell input tap 800 ${height - 540}`);
  await sleep(2000);
  // 关闭关爱通
  shell.exec(
    'adb shell am force-stop com.guanaitong'
  );
};

module.exports = start;
