// // (21-94行)定义了一些变量和函数
// jQuery = function () {
//     // 将一些变量和函数赋值给一个变量名就是为了利于压缩
// var rootjQuery,
//     //根目录 与866行的rootjQuery=jQuery(document)对应
//     // 因为jQuery(document)不利于压缩所以赋值给rootjQuery

//         var readList, //用于dom加载

//         // typeof undefined得到一个字符串格式'undefined' typeof undefined为了兼容xml等
//         (core_strundefined = typeof undefined),
//             // 变量存储的好处：利于压缩 即变量名压缩后为一个字母
//             (location = window.location),
//             (document = window.document),
//             docElm = document.documentElement,

//             //如果有人使用$将$存的值保存到_$中防止冲突
//             _jQuery = window.jQuery,
//             _$ = window.$,

//             // 与一个$.type()对应 做类型判断 里面存为{'[object string]':'string','[object Array]':'Array'}
//             class2type = {},

//             //2.0.3版本用不到这个方法删除本地存储的数据
//             core_deletedIds = [],

//             //常用的数组字符串等方法赋给变量
//             core_concat = core_deletedIds.concat,
//             core_push = core_deletedIds.push,
//             core_slice = core_deletedIds.slice,
//             core_indexOf = core_deletedIds.indexOf,
//             core_toString = class2type.toString,
//             core_hasOwn = class2type.hasOwnProperty,
//             core_trim = core_version.trim,

// }
