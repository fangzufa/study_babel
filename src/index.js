// import '@babel/polyfill'

const sum = (a, b) => a + b;

// 新的 API
Promise.resolve(100).then(data => data);

// 新的 API
[10, 20, 30].includes(20)

// 语法，符合 ES5 语法规范
// 不处理模块化(webpack会去处理)


// 污染全局环境
// window.Promise = function () { }
// Array.prototype.includes = function () { }