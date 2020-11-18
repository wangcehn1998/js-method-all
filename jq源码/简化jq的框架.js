// jquery 2.0.3

// jq是写在自执行函数里的  里边的变量函数都是局部的 防止全局变量污染
// 但是都写在里边不行得对外提供接口
// jq中 $()等于jQuery()
// 如何提供对外接口:挂载到window上

(function (window, undefined) {
  // window写在这的原因：查找速度比较慢所以传个window实参 还有方便压缩
  // undefined 为了防止外部人为修改undefined 因为函数内部找变量是先在自身内部找

  "use strict"; //严格模式

  // (21-94行)定义了一些变量和函数
  jQuery = function () {};

  //(96,283)行 给jq对象添加一些属性和方法 jq就是基于面向对象的 因为prototype
  // 例如$('div).css() 虽然$('div)是函数调用但是执行结果是对象
  // $调用的就是这个函数
  jQuery = function (selector, content) {
    //   jq写的return一个实例化对象
    return new jQuery.fn.init(selector, content, rootjQuery);
  };

  // (285,347)行 extend:jq的继承方法 将后续添加的代码挂载到jq对象上 有利于后期代码和插件的扩展

  /*(349,817)行 jQuery.extend(): 扩展一些工具方法
    jq中提供两种操作代码的方式
    1.$().css()实例的方法  只能给jq对象用
    2.$.trim() $是函数 所以是在函数下面扩展方法就是静态方法 即扩展工具方法 它既可以给jq对象用也可以给原生js用
    关系：2更底层 1更高级 很多方法都是实例方法里面调的工具方法*/

  //  (877,2856)行 Sizzle:复杂选择器的实现
  // 复杂选择器：$('ul li+p input.class') 如果只做jq选择的话可以下载Sizzle

  //  (2880,3042)行 callbacks:回调函数:函数的统一管理 开发中函数多管理起来麻烦

  /*(3043,3183)行 deferred：延迟对象(利用回调实现的)：对异步的统一管理
  以下代码的写法能让同步与异步同时出现时按照逻辑先打印1再打印2
        var dfd = $.Deferred();
        setTimeout(function(){
            alert(1);
            dfd.resolve();
          },1000)
          dfd.done(function(){
          alert(2);
          });*/

  // (3184,3295) support:功能检测:通过功能判断浏览器

  //(3308,3652) data() : 数据缓存

  //(3653,3797) queue()/dequnue(): 队列管理 可用于动画的运动

  //(3803,4299) attr/prop/val/addClass()等 ：对元素属性的操作

  //(4300,5128) on/trigger() ：事件操作的相关方法

  //(5140,6057) DOM操作：添加删除获取包装 DOM筛选

  //(6058,6620) css() : 针对样式的操作

  //(6621,7854) 提交的数据和ajax() : ajax() load() getJson()

  //(7855,8584) animate() : 运动的方法

  //(8585,8792) offset() :位置与尺寸的方法

  //(8804,8821) JQ支持模块化的模式

  //8826行 把jquery和$这个函数挂载到了window上 对外提供接口
  window.jQuery = window.$ = jQuery;
})();
